import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { MailService } from '../../services/mail.service';


@Injectable()
export class AnonymousGuard implements CanActivate {

  constructor(
    private mailService: MailService,
    private router: Router
  ) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if (!this.mailService.userName) {
      return true;
    }
    this.router.navigate(['/mail']);
    return false;

  }
}
