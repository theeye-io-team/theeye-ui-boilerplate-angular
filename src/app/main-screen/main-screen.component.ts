import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SessionService } from '../api/session/session.service';
@Component({
  selector: 'app-main-screen',
  templateUrl: './main-screen.component.html',
  styleUrls: ['./main-screen.component.less']
})
export class MainScreenComponent implements OnInit {
	
	showOverlay:boolean=true
	customer!:String
	constructor(private session:SessionService, private router:Router) { }

	logout() {
		this.session.logout()
	}

	ngOnInit(): void {
		this.session.activeSession.subscribe(
			data => {
				if(!data.email && !data.token) {
					this.router.navigateByUrl("/login-screen");
				}
				this.customer = data.customer
				this.showOverlay=false
			}
		)
	}
}
