import { Injectable } from "@angular/core";
import { user } from "../models/user.model";
import { HttpClient } from '@angular/common/http';
import { Router } from "@angular/router";

@Injectable({providedIn :'root'})

export class UserService
{

constructor(private http : HttpClient ,private router : Router ){}
signUp(email : string , password : string)
{
  this.http.post('https://localhost:5001/api/v1/Identity/register',
  {
      email : email,
      password : password
  }).subscribe(
      response=> 
      {
          console.log(response);
      },
      error=>
      {
          console.log(error)
         
      }
  )

}

}