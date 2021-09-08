

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { LoaderanimationComponent } from './loaderanimation/loaderanimation.component';


@NgModule({
  declarations: [
    LoginComponent,
    LoaderanimationComponent    
  ],
  imports: [
    FormsModule,
    CommonModule,
    RouterModule.forChild([{ path: '', component: LoginComponent }]),
  ],
 exports : [LoginComponent]
})
export class UserModule { }
