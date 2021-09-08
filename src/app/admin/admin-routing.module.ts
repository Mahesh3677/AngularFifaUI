import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { UserGuard } from "../user/user.guard";
import { HomeComponent } from "./home/home.component";
import { CountriesListComponent } from "./home/inputpanel/countries-list/countries-list.component";
import { CountryComponent } from "./home/inputpanel/country/country.component";
import { DashboardComponent } from "./home/inputpanel/dashboard/dashboard.component";


const adminRoutes : Routes = [
    {path : '' ,component : HomeComponent,canActivate :[UserGuard],
    children :[
        {path  : 'dashboard' , component : DashboardComponent},
        {path  : 'countries' , component : CountriesListComponent},
        {path : 'country/:id' , component : CountryComponent}
    ]
},
    
   
]

@NgModule({
    imports : [RouterModule.forChild(adminRoutes)],
    exports : [RouterModule]
   

})
export class AdminRoutingModule
{}