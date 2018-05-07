import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay, tap } from 'rxjs/operators';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { fromPromise } from 'rxjs/internal-compatibility';


@Injectable()
export class UserService {

  constructor(public afAuth: AngularFireAuth) { }

  public get userName(): string {
    return localStorage.getItem('email');
  }

  public login(email: string, password: string): Observable<any> {
    return fromPromise(this.afAuth.auth.signInWithEmailAndPassword(email, password))
      .pipe(
        delay(1000),
        tap(() => {
          localStorage.setItem('email', email);
        })
      );
  }

  public logout(): Observable<any> {
    return of(1).pipe(
      delay(1000),
      tap(() => {
        localStorage.removeItem('email');
      })
    );
  }

  public register(email: string, password: string): Observable<any> {
    return fromPromise(this.afAuth.auth.createUserWithEmailAndPassword(email, password))
  }

}
