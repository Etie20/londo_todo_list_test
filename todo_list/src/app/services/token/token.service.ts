import { Injectable } from '@angular/core';
import {TOKEN_KEY, USER_DATA} from "../../constants/constants";
import {User} from "../../core/models/User";

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  public saveToken(token: string) {
    this.removeToken();
    localStorage.setItem(TOKEN_KEY, token);
  }

  public saveUserData(user: User) {
    localStorage.setItem(USER_DATA, JSON.stringify(user));
  }

  public getUserData(): User {
    return JSON.parse(<string>localStorage.getItem(USER_DATA));
  }

  public getToken(): string | null {
      return localStorage.getItem(TOKEN_KEY);
  }

  public removeToken() {
      return localStorage.removeItem(TOKEN_KEY);
  }

  public parseJwt(token: string | null) {
    if (!token) {
      return null;
    }
    const base64Url = token!.split('.')[1]; // Récupération du payload
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    const jsonPayload = decodeURIComponent(
      atob(base64)
        .split('')
        .map(function (c) {
          return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
        })
        .join(''),
    );
    return JSON.parse(jsonPayload);
  }

  public getTokenExpirationDate() {
    const token = this.getToken();
    if (!token) {
      return null;
    }
    const payload = this.parseJwt(token);
    return new Date(payload.exp * 1000);
  }

  public isExpired() {
    const token = this.getToken();
    if (!token) {
      return true;
    }
    return this.getTokenExpirationDate()!.getTime() < Date.now();
  }

  public getUserId() {
    const payload = this.parseJwt(this.getToken());
    return payload._id;
  }

}
