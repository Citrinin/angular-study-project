import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Mail } from '../@types/mail';
import { Contact } from '../@types/contact';
import { Router } from '@angular/router';

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
    return this.http.get<Mail[]>('https://jsonplaceholder.typicode.com/comments');
  }

  public getContacts(): Observable<Contact[]> {
    return this.http.get<Contact[]>('https://jsonplaceholder.typicode.com/users');
  }

  public login(userName: string): void {
    localStorage.setItem('userName', userName);
    this.authChanged.emit();
    this.router.navigate(['/mail']);
  }
  public logout(): void {
    localStorage.removeItem('userName');
    this.authChanged.emit();
    this.router.navigate(['/']);
  }

}
