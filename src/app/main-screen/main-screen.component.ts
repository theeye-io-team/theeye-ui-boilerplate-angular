import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SessionService } from '../api/session/session.service';
@Component({
  selector: 'app-main-screen',
  templateUrl: './main-screen.component.html',
  styleUrls: ['./main-screen.component.less']
})
export class MainScreenComponent implements OnInit {

	constructor(private session:SessionService, private router:Router) { }

	logout() {
		this.session.logout();
	}

	ngOnInit(): void {
		this.session.session.subscribe(
			data => {
				if(typeof(data) == "undefined") {
					this.router.navigateByUrl("/login-screen");
				}
			}
		)
	}
}
