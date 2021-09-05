import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 
  constructor(private userService : UserService) { }

  ngOnInit(): void {
  }

  onLginSubmit(loginForm : NgForm)
  {
    

  }

  onRegSubmit(regForm : NgForm)
  {
    
  const email = regForm.form.value.email;
  const password = regForm.form.value.password;   
  this.userService.signUp(email , password);
  }
}
