import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserGuard } from './user/user.guard';


const routes: Routes = [
  {path : '' , redirectTo :"/admin", pathMatch :"full"},
  {path: "admin",loadChildren:()=>import("./admin/admin.module").then(m=>m.AdminModule) ,canActivate : [UserGuard]},
  {path: "login",loadChildren:()=>import("./user/user.module").then(m=>m.UserModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
