import { Injectable } from "@angular/core";
import { user } from "../models/user.model";
import { HttpClient } from '@angular/common/http';
import { Router } from "@angular/router";
import { environment } from "src/environments/environment";
import { BehaviorSubject } from "rxjs";
import { tap } from "rxjs/operators";
import { AuthResponseData } from "../models/authResponseData.model";


@Injectable({providedIn :'root'})


export class UserService
{
    
 user = new BehaviorSubject<user>(null) 
constructor(private http : HttpClient ,private router : Router ){}
signUp(email : string , password : string)
{
  return this.http.post<AuthResponseData>(environment.baseUrl+'Identity/register',
  {
      email : email,
      password : password
  }).pipe(
    tap(
      resdata=> {
        this.handleAuth(resdata.email , resdata.token ,resdata.refreshToken)
      }
    )
  )

}
Login(email : string , password : string)
{
  return this.http.post<AuthResponseData>(environment.baseUrl+'Identity/login',
  {
      email : email,
      password : password
  }).pipe(
    tap(
      resdata=> {
        this.handleAuth(resdata.email , resdata.token ,resdata.refreshToken)
      }
    )
  )


}

private handleAuth(email :string , token :string , refreshToken : string)
{
  
  const logUSer = new user(email ,token , refreshToken);
  this.user.next(logUSer);
  localStorage.removeItem('userData');
  localStorage.setItem('userData', JSON.stringify(logUSer));

}

 autoLogin()
{
  const userData: {
    email: string;   
    token: string;
    refreshToken: string;
  } = JSON.parse(localStorage.getItem('userData'));
  if (!userData) {
    return;
  }

  const loadedUser = new user(userData.email ,userData.token , userData.refreshToken);
  if(loadedUser.token)
  {
    this.user.next(loadedUser);
  }
}
logout()
{
  this.user.next(null);
    this.router.navigate(['/login']);
    localStorage.removeItem('userData');
}

}