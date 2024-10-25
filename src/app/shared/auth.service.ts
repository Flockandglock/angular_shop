import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';

import {IUser, IResponseAuth} from '../../types/index';

import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  public login(user: IUser) {
    return this.http.post<IUser>(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${environment.apiKey}`, user)
      .pipe(
        tap(this.setToken)
      )
  }

  private setToken(response: any) {
    if (response) {
      const expData = new Date( new Date().getTime() + +response.expiresIn * 1000);
      localStorage.setItem('fb-token-exp', expData.toString())
      localStorage.setItem('fb-token', response.idToken)
    } else {
      localStorage.clear()
    }
  }

  get token () {
    const getFbTokenExp = localStorage.getItem('fb-token-exp');
    const expDate = getFbTokenExp ? new Date(getFbTokenExp) : null;

    if ( expDate && new Date > expDate) {
      this.logout()
      return undefined
    } else {
      return localStorage.getItem('fb-token')
    }
  }

  logout () {
    this.setToken(null)
  }

  isAuthentificated () {
    return !!this.token
  }
}
