import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import config from '../config/config';

const gateway = config.api.gateway;

@Injectable()	
export class Session {
	
	constructor(private http:HttpClient) {}


}
