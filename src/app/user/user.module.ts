

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';


@NgModule({
  declarations: [
    LoginComponent    
  ],
  imports: [
    FormsModule,
    CommonModule,
    RouterModule.forChild([{ path: '', component: LoginComponent }]),
  ],
 exports : [LoginComponent]
})
export class UserModule { }
