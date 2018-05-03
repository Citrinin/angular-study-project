import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { delay } from 'rxjs/operators/delay';
import { tap } from 'rxjs/operators';

@Injectable()
export class UserService {

  constructor() { }

  public get userName(): string {
    return localStorage.getItem('userName');
  }

  public login(userName: string): Observable<any> {
    const source = of(1).pipe(
      delay(1000),
      tap(() => {
        localStorage.setItem('userName', userName);
      })
    );
    return source;
  }

  public logout(): void {
    localStorage.removeItem('userName');
  }

}
