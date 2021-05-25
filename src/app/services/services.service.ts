import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/index';
import {User} from '../Model/user';
import {Phone} from '../Model/phone';
import { ApiResponse } from '../Model/api-response';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor(private http: HttpClient) { }
  baseUrl ='http://localhost/nG/AngularLoginRegister/AngularLoginRegister/';
  // baseUrl ='http://idbproject.com/ng/backend';


  login(loginData): Observable<ApiResponse> {
     return this.http.post<ApiResponse>(this.baseUrl + '/login.php', loginData);
}
// register table start
  getUsers(): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(this.baseUrl + '/register/list.php');
  }

  getUserById(id: number): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(this.baseUrl + '/register/getById.php?id=' + id);
  }

  createUser(user: User): Observable<ApiResponse> {
    return this.http.post<ApiResponse>(this.baseUrl + '/register/insert.php?action=insert', user);
  }

  deleteUser(id: number): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(this.baseUrl + '/register/delete.php?action=delete&id=' + id);
  }

  updateStudent(user: User){
    return this.http.post<ApiResponse>(this.baseUrl + '/register/update.php', user);
  }
  // register table end

  // phone table start
  getAllPhones(): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(this.baseUrl + '/phone/list.php');
  }

  getPhoneById(id: number): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(this.baseUrl + '/phone/getById.php?id=' + id);
  }

  addPhone(phone: Phone): Observable<ApiResponse> {
    return this.http.post<ApiResponse>(this.baseUrl + '/phone/insert.php?action=insert', phone);
  }

  deletePhone(id: number): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(this.baseUrl + '/phone/delete.php?action=delete&id=' + id);
  }

  updatePhone(phone: Phone){
    return this.http.post<ApiResponse>(this.baseUrl + '/phone/update.php', phone);
  }
  //// phone table end


}
