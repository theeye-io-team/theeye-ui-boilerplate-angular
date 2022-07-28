import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { SessionService } from '../api/session/session.service';
import { environment } from '../../environments/environment';
import {FormControl, Validators} from '@angular/forms';


@Component({
	selector: 'login-screen',
	templateUrl: './login-screen.component.html',
	styleUrls: ['./login-screen.component.less'],
})
export class LoginScreenComponent implements OnInit {

	email:FormControl = new FormControl('', [Validators.required, Validators.email]);
	password:string=''
	customer:string=''
	errorDiv: string = ''
	disabledCustomer: boolean = environment.api.disabledCustomer
	showOverlay:boolean=true

	constructor(private router: Router, private sessionService: SessionService) { }

	getErrorMessage(field:FormControl) {
		if (field.hasError('required')) {
		  return 'You must enter a value';
		}
	
		return field.hasError('email') ? 'Not a valid email' : '';
	  }

	login = async () => {
		this.showOverlay = true
		//console.log("Iniciando sesión...")
		this.errorDiv = ''
		try {
			//console.log(this.email.hasError('required'))
			//console.log(this.email.hasError('email'))
			if(!this.email.hasError('required') && !this.email.hasError('email') && this.disabledCustomer) {
				await this.sessionService.login(this.email.value, this.password, environment.api.customer)
			}

			if(!this.email.hasError('required') && !this.email.hasError('email') && !this.disabledCustomer) {
				await this.sessionService.login(this.email.value, this.password, this.customer)
			}
			this.showOverlay = false
			
		} catch(e:any) {
			if(e.status === 500) {
				this.errorDiv=e.message
			}
			if(e.status === 403) {
				this.errorDiv = 'Credentials lack privileges for selected customer.'
				//console.log('Forbidden')
			}

			if(e.status === 401) {
				this.errorDiv = 'Invalid authentication credentials.'
				//console.log('Unauthorized')
			}

			if(e.status === 404) {
				this.errorDiv = 'Gateway is unreachable.'
				//console.log('Unreachable')
			}
		}
		
	}

	ngOnInit(): void {
		this.sessionService.activeSession.subscribe(
			async data => {
				if(data.email && data.token) {
					if(data.customer) {
						this.customer = data.customer
					} else {
						const profile = await this.sessionService.getProfileData(data.token)
						this.sessionService.setCustomer(profile.current_customer.name)
					}
					this.router.navigateByUrl("/main-screen");
				}
				this.showOverlay=false
			}
		)
	}
}
