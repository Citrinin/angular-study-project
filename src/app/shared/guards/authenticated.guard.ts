import { Injectable, Optional } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { GoogleService } from '../../services/google.service';

@Injectable()
export class AuthenticatedGuard implements CanActivate {
    constructor(@Optional() private googleService: GoogleService, private router: Router) { }

    // redirect anonymous user, when he tries to get such pages as wishlist, adminpage, etc.
    canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        if (this.googleService && this.googleService.user) {
            return true;
        }
        this.router.navigate(['/']);
    }
}
