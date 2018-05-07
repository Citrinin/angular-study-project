import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Mail } from '../@types/mail';
import { Contact } from '../@types/contact';
import { config } from '../config/config';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  })
};

@Injectable()
export class MailService {

  constructor(
    private http: HttpClient
  ) { }

  public getMails(): Observable<Mail[]> {
    return this.http.get<Mail[]>(`${config.url}/comments`);
  }

  public getContacts(): Observable<Contact[]> {
    return this.http.get<Contact[]>(`${config.url}/users`);
  }


  public getMail(id: number): Observable<any> {
    return this.http.get<Mail>(`${config.url}/comments/${id}`);
  }

}
