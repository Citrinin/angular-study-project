import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Mail } from '../@types/mail';
import { Contact } from '../@types/contact';
import { Router } from '@angular/router';
import { of } from 'rxjs/observable/of';
import { empty } from 'rxjs/observable/empty';
import 'rxjs/operators/delay';
import { delay } from 'rxjs/operators/delay';
import { config } from '../config/config';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  })
};

@Injectable()
export class MailService {
  public authChanged: EventEmitter<void> = new EventEmitter();

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }


  public get userName(): string {
    return localStorage.getItem('userName');
  }

  public getMails(): Observable<Mail[]> {
    return this.http.get<Mail[]>(`${config.url}/comments`);
  }

  public getContacts(): Observable<Contact[]> {
    return this.http.get<Contact[]>(`${config.url}/users`);
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

  public getMail(id: number): Observable<any> {
    return this.http.get<Mail>(`${config.url}/comments/${id}`);
  }

}
