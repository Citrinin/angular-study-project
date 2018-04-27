import { Injectable, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { delay } from 'rxjs/operators/delay';
import { Router } from '@angular/router';

@Injectable()
export class UserService {

  public authChanged: EventEmitter<void> = new EventEmitter();

  constructor(private router: Router) { }

  public get userName(): string {
    return localStorage.getItem('userName');
  }

  public login(userName: string): Observable<any> {
    const source = of(1).pipe(
      delay(1000)
    );
    source.subscribe(() => {
      localStorage.setItem('userName', userName);
      this.authChanged.emit();
      this.router.navigate(['/mail']);
    });
    return source;
  }

  public logout(): void {
    localStorage.removeItem('userName');
    this.authChanged.emit();
    this.router.navigate(['/']);
  }

}
