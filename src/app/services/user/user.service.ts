import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';



@Injectable({
  providedIn: 'root'
})
export class UserService {
  http!: HttpClient; 

  createNewUser(payload: any) {
    return this.http.post(`${environment.baseURL}user/register`, payload);
  }
  userLogin(payload: any) {
    return this.http.post(`${environment.baseURL}user/login`, payload);
  }
  getProtectedData() {
    return this.http.get(`${environment.baseURL}user/data`);
  }

  constructor() { }
}
