import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { FooterComponent } from './home/footer/footer.component';
import { HeaderComponent } from './home/header/header.component';
import { NavbarComponent } from './home/navbar/navbar.component';
import { AdminRoutingModule } from './admin-routing.module';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { LoadingspinnerComponent } from './helpers/loadingspinner/loadingspinner.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptorService } from './auth-interceptor.service';
import { AdminService } from '../shared/services/admin.service';
import { InputpanelComponent } from './home/inputpanel/inputpanel.component';
import { DashboardComponent } from './home/inputpanel/dashboard/dashboard.component';
import { CountriesListComponent } from './home/inputpanel/countries-list/countries-list.component';
import { CountryComponent } from './home/inputpanel/country/country.component';
import { CountryService } from '../shared/services/country.service';



@NgModule({
  declarations:
   [
     
     DashboardComponent,
     FooterComponent,
     HeaderComponent,
     NavbarComponent,
     HomeComponent,
     LoadingspinnerComponent,
     InputpanelComponent,
     CountriesListComponent,
     CountryComponent
     ],
  imports: [
    CommonModule ,
    AdminRoutingModule,
    FormsModule,
    HttpClientModule

  ],
  exports: [HomeComponent ,
    HeaderComponent,
  NavbarComponent,
FooterComponent,
DashboardComponent
],
providers:[{
  provide: HTTP_INTERCEPTORS,
  useClass: AuthInterceptorService,
  multi: true
},
AdminService , CountryService]
})
export class AdminModule { }
