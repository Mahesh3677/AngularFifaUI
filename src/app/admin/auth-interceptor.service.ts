import { HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";

import { UserService } from "../shared/services/user.service";

@Injectable()
export class AuthInterceptorService implements HttpInterceptor {

    constructor(private userService: UserService) { }

    intercept(req: HttpRequest<any>, next: HttpHandler) {

        
        const user = JSON.parse(localStorage.getItem('userData'));
        
        if (user.token) {
            const request = req.clone({
                setHeaders: {
                    Authorization: `bearer ${user.token}`
                }
            });
            return next.handle(request);
        }
        return next.handle(req);
    }

}