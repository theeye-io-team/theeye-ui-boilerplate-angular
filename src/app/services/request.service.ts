import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Config } from '../api/config/config';

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  private filesUrl = `${Config.api.supervisor}/${Config.api.customer}/file`

  constructor(private http: HttpClient) { }

  login = (email:string, password:string, customer:string|null):Observable<any> => {
    const url = `${Config.api.gateway}/auth/login?customer=${customer}`
    const body = {}
    const headers = {
      'Content-Type': 'application/json', 
      'Accept': 'application/json',
      'Authorization':`Basic ${btoa(`${email}:${password}`)}`
    }

    return this.http.post<any>(url,body,{headers})             

  }
}
