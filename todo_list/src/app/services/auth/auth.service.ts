import { Injectable } from '@angular/core';
import {environment} from "../../environment/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {User} from "../../core/models/User";
import {AuthRequest} from "../../core/dtos/request/AuthRequest";
import {Response} from "../../core/dtos/response/Response";


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  apiUrl = environment.apiUrl + '/auth'
  constructor(private http: HttpClient) {}

  register(authRequest: AuthRequest): Observable<Response<User>> {
    return this.http.post<Response<User>>(`${this.apiUrl}/signup`, authRequest);
  }

  login(authRequest: AuthRequest): Observable<Response<User>> {
    return this.http.post<Response<User>>(`${this.apiUrl}/login`, authRequest);
  }
}
