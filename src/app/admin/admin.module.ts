import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginComponent } from './user/login/login.component';
import { DashboardComponent } from './home/dashboard/dashboard.component';
import { FooterComponent } from './home/footer/footer.component';
import { HeaderComponent } from './home/header/header.component';
import { NavbarComponent } from './home/navbar/navbar.component';
import { AdminRoutingModule } from './admin-routing.module';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations:
   [
     LoginComponent,
     DashboardComponent,
     FooterComponent,
     HeaderComponent,
     NavbarComponent,
     HomeComponent
     ],
  imports: [
    CommonModule ,
    AdminRoutingModule
  ],
  exports: [HomeComponent ,
    HeaderComponent,
  NavbarComponent,
FooterComponent,
DashboardComponent]
})
export class AdminModule { }
