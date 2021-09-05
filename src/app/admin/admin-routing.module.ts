import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { LoginComponent } from "./user/login/login.component";

const adminRoutes : Routes = [
    {path : '' ,component : HomeComponent},
    {path : 'login' ,component : LoginComponent},
]

@NgModule({
    imports : [RouterModule.forChild(adminRoutes)],
    exports : [RouterModule]

})
export class AdminRoutingModule
{}