import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { UserService } from "src/app/shared/services/user.service";
import { map, tap, take } from 'rxjs/operators';
import { Injectable } from "@angular/core";

@Injectable({ providedIn: 'root' })

export class UserGuard implements CanActivate{

    constructor(private router : Router , private userService : UserService ){}
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
     Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree
    {
      return this.userService.user.pipe(
           take(1),
           map(
               user =>
               {
                                    
                   const isAuth = !!user;
                        if (isAuth) {
                        return true;
                        }
                       return this.router.createUrlTree(['/login'])
                   
               }
           )

       )
    }

}