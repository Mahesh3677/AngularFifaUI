import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistrationComponent } from './user/registration/registration.component';
import { LoginComponent } from './user/login/login.component';



@NgModule({
  declarations: [RegistrationComponent, LoginComponent],
  imports: [
    CommonModule
  ]
})
export class AdminModule { }
