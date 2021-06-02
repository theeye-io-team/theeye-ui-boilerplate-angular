import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Session } from '../api/session/session';
import http from 'superagent';

import config from '../api/config/config';

const gateway = config.api.gateway;

@Component({
	selector: 'login-screen',
	templateUrl: './login-screen.component.html',
	styleUrls: ['./login-screen.component.less'],
})
export class LoginScreenComponent implements OnInit {
	constructor(private router: Router) { }

	login(email: string, password: string) {
		console.log([email, password]);
		if (email && password) {
			const url = gateway + '/auth/login';
			http
				.post(url)
				//.send({ username, password }) // query string
				.set('accept', 'application/json')
				.set('content-type', 'application/json')
				.auth(email, password)
				.end((err: any, response: any) => {
					if (err) {
						if (err.status === 401) {
							// window.app.loader.hide();
							return;
						}
					}
					let session = response.body;
					console.log(session);
					this.router.navigateByUrl("/main-screen");

				});
		}
	}

	ngOnInit(): void { }
}
