import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
// @ts-ignore 
import http from 'superagent'; 
import config from '../config/config';

const gateway = config.api.gateway;

type cookie = {
	email: string
	token: string
	credential: string
} | undefined

@Injectable({
  providedIn: 'root'
})
export class SessionService {

	private s: cookie

	session = new Observable(obs => {
		let previousStream: cookie;
		obs.next(this.s)
		setInterval(() => { 
			if (previousStream != this.s){
				obs.next(this.s)
				previousStream = this.s;
			}
		}, 500)
	});
	
	constructor() {
		this.refreshLogin();
	}

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
							// window.app.loader.hide(); //TODO: Implement
							return;
						}
					}
					this.s = {
						email: email,
						token: response.body.access_token,
						credential: response.body.credential
					};
					this.store()
				});
		}
	}

	logout() {
		this.s = undefined;
		localStorage.removeItem("isLogged");
	}

	private store() {
		if(this.s) {
			localStorage.setItem("isLogged", 'true');
			for (const [key, value] of Object.entries(this.s)) {
  				localStorage.setItem(key, value);
			}
		}
	}

	refreshLogin() {
		if(localStorage.getItem("isLogged") == "true") {
			this.s = {
				//@ts-ignore
				email: localStorage.getItem("email"),
				//@ts-ignore
				token: localStorage.getItem("token"),
				//@ts-ignore
				credential: localStorage.getItem("credential"),
			}
		}
	}
}
