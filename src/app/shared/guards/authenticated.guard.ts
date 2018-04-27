import { Injectable, Optional } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { UserService } from '../../services/user.service';

@Injectable()
export class AuthenticatedGuard implements CanActivate {
    constructor(private userService: UserService, private router: Router) { }

    canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        if (this.userService.userName) {
            return true;
        }
        this.router.navigate(['/']);
        return false;
    }
}
