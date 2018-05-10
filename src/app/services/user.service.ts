import { Injectable } from '@angular/core';
import { Observable, of, from, zip } from 'rxjs';
import { delay, tap } from 'rxjs/operators';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { MailService } from './mail.service';
import { AuthService } from './auth.service';


@Injectable()
export class UserService {

  constructor(
    private afAuth: AngularFireAuth,
    private mailService: MailService,
    private authService: AuthService
  ) { }



  public login(email: string, password: string): Observable<any> {
    return from(this.afAuth.auth.signInWithEmailAndPassword(email, password))
      .pipe(
        delay(1000),
        tap(() => {
          this.authService.setUser(email);
        })
      );
  }

  public logout(): Observable<any> {
    return of(1).pipe(
      delay(1000),
      tap(() => {
        this.authService.removeUser();
      })
    );
  }

  public register(email: string, password: string): Observable<any> {
    return zip(
      from(this.afAuth.auth.createUserWithEmailAndPassword(email, password)),
      this.mailService.addUser(email)
    );
  }

  public resetPassword(email: string): Observable<any> {
    return from(this.afAuth.auth.sendPasswordResetEmail(email));
  }

}
