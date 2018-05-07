import { Injectable } from '@angular/core';
import { Observable ,  of } from 'rxjs';
import { delay ,  tap } from 'rxjs/operators';

@Injectable()
export class UserService {

  constructor() { }

  public get userName(): string {
    return localStorage.getItem('userName');
  }

  public login(userName: string): Observable<any> {
    return of(1).pipe(
      delay(1000),
      tap(() => {
        localStorage.setItem('userName', userName);
      })
    );
  }

  public logout(): Observable<any> {
    return of(1).pipe(
      delay(1000),
      tap(() => {
        localStorage.removeItem('userName');
      })
    );
  }

}
