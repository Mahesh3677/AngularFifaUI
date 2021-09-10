import { Injectable } from "@angular/core";
import { user } from "../models/user.model";
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Router } from "@angular/router";
import { environment } from "src/environments/environment";
import { BehaviorSubject, throwError } from "rxjs";
import { catchError, map, tap } from "rxjs/operators";
import { AuthResponseData } from "../models/authResponseData.model";
import { RefreshTokenRequest } from "../models/refreshTokenRequest.model";


@Injectable({ providedIn: 'root' })


export class UserService {
  private tokenExpirationTimer: any;
  user = new BehaviorSubject<user>(null)
  constructor(private http: HttpClient, private router: Router) { }
  signUp(email: string, password: string) {
    return this.http.post<AuthResponseData>(environment.baseUrl + 'Identity/register',
      {
        email: email,
        password: password
      }).pipe(
        tap(
          resdata => {
            this.handleAuth(resdata.email, resdata.token, resdata.refreshToken)
          }
        )
      )

  }
  Login(email: string, password: string) {
    return this.http.post<AuthResponseData>(environment.baseUrl + 'Identity/login',
      {
        email: email,
        password: password
      }).pipe(
        tap(
          resdata => {
            this.handleAuth(resdata.email, resdata.token, resdata.refreshToken)
          }
        )
      )


  }

  private handleAuth(email: string, token: string, refreshToken: string) {

    const logUSer = new user(email, token, refreshToken);
    this.user.next(logUSer);
    localStorage.removeItem('userData');
    localStorage.setItem('userData', JSON.stringify(logUSer));
    var decodedToken = JSON.parse(atob(token.split('.')[1]));
    this.autoLogout(decodedToken.exp * 1000);

  }

  autoLogin() {
    const localUser = JSON.parse(localStorage.getItem('userData'));
    if (localUser !== null) {
      const userData: {
        email: string;
        token: string;
        refreshToken: string;
      } = localUser;
      if (!userData) {
        this.logout();
      }

      const loadedUser = new user(userData.email, userData.token, userData.refreshToken);
      if (loadedUser.token) {
        this.user.next(loadedUser);
      }
    }
  }

  autoLogout(expirationDuration: number) {
    this.tokenExpirationTimer = setTimeout(() => {
      this.autoRefresh();
    }, expirationDuration);
  }
  autoRefresh() {
    
    const localUser = JSON.parse(localStorage.getItem('userData'));
    if (localUser !== null) {
      const userData: {
        email: string;
        token: string;
        refreshToken: string;
      } = localUser;
      if (!userData) {
        this.logout();
      }
      var decodedToken = JSON.parse(atob(userData.token.split('.')[1]));
      var tokenExpDate = new Date(decodedToken.exp * 1000);

      if (new Date > tokenExpDate) {
        const refreshRequest = new RefreshTokenRequest(userData.token, userData.refreshToken);
        this.http.post<RefreshTokenRequest>(environment.baseUrl + 'Identity/refresh', refreshRequest)
          .pipe(
            catchError(this.handleError),
            map(resData => {
              return new RefreshTokenRequest(resData.token, resData.refreshToken)
            })
          )
          .subscribe
          (
            data => {

             
              this.handleAuth(userData.email, data.token, data.refreshToken);

            },
            errorMessage => {
              
              switch (errorMessage) {
                case 'invalid_token':
                  this.logout();
                  break;
                case 'refresh_token_expired':
                  this.logout();
                  break;
                case 'refresh_token_Not_expired':
                  return;
                  break;
              }
            }
          )
      }
    }
  }

  private handleError(errorRes: HttpErrorResponse) {
    let errorMessage = 'An unknown error occurred!';
    if (errorRes.error.errors) {
      if (errorRes.error.errors[0] == "refresh_token_Not_expired") {
        errorMessage = "refresh_token_Not_expired"
      }
      else if (errorRes.error.errors[0] == "refresh_token_expired") {
        errorMessage = "refresh_token_expired"
      }
      else if (errorRes.error.errors[0] == "invalid_token") {
        errorMessage = "invalid_token"
      }
    }
    return throwError(errorMessage);
  }
  logout() {
    this.user.next(null);
    this.router.navigate(['/login']);
    localStorage.removeItem('userData');
  }

}