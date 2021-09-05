import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginComponent } from './user/login/login.component';
import { DashboardComponent } from './home/dashboard/dashboard.component';
import { FooterComponent } from './home/footer/footer.component';
import { HeaderComponent } from './home/header/header.component';
import { NavbarComponent } from './home/navbar/navbar.component';
import { AdminRoutingModule } from './admin-routing.module';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { LoadingspinnerComponent } from './helpers/loadingspinner/loadingspinner.component';


@NgModule({
  declarations:
   [
     LoginComponent,
     DashboardComponent,
     FooterComponent,
     HeaderComponent,
     NavbarComponent,
     HomeComponent,
     LoadingspinnerComponent
     ],
  imports: [
    CommonModule ,
    AdminRoutingModule,
    FormsModule

  ],
  exports: [HomeComponent ,
    HeaderComponent,
  NavbarComponent,
FooterComponent,
DashboardComponent,
LoginComponent]
})
export class AdminModule { }
