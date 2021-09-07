import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 
  constructor(private userService : UserService , private router : Router) { }

  ngOnInit(): void {
  }


  onRegSubmit(regForm : NgForm)
  {
    
  const email = regForm.form.value.email;
  const password = regForm.form.value.password;   
  this.userService.signUp(email , password)
  .subscribe(
    response=> 
    {
        console.log(response);
        this.router.navigate(['/admin'])
        regForm.reset()
    },
    error=>
    {
        console.log(error)
       
    }
);
  }

  onLginSubmit(loginForm : NgForm)
  {
    
  const email = loginForm.form.value.userEmail;
  const password = loginForm.form.value.pass;   
  this.userService.Login(email , password)
  .subscribe(
    response=> 
    {
        console.log(response);
        this.router.navigate(['/admin'])
        loginForm.reset()
    },
    error=>
    {
        console.log(error)
       
    }
);
  }
}
