import { Injectable, Optional } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { MailService } from '../../services/mail.service';

@Injectable()
export class AuthenticatedGuard implements CanActivate {
    constructor(private mailService: MailService, private router: Router) { }

    canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        if (this.mailService.userName) {
            return true;
        }
        this.router.navigate(['/']);
        return false;
    }
}
