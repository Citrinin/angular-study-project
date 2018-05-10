import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, from } from 'rxjs';
import { Mail } from '../@types/mail';
import { Contact } from '../@types/contact';
import { config } from '../config/config';
import { AngularFireDatabase } from 'angularfire2/database';
import { UserService } from './user.service';
import { AuthService } from './auth.service';
import { map, tap } from 'rxjs/operators';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  })
};

@Injectable()
export class MailService {

  constructor(
    private http: HttpClient,
    private db: AngularFireDatabase,
    private authService: AuthService
  ) { }


  public getContacts(): Observable<Contact[]> {
    return this.http.get<Contact[]>(`${config.url}/users`);
  }


  public addUser(email: string): Observable<any> {
    return from(this.db.list('users').push({ email }));
  }

  public sendMessage(emailTo: string, subject: string, message: string): Observable<any> {
    return from(this.db.list('messages').push({ emailFrom: this.authService.userName, date: (new Date()).getTime(), emailTo, subject, message }));
  }

  public getSentMails(): Observable<any[]> {
    return this.db.list('/messages', ref => ref.orderByChild('emailFrom').equalTo(this.authService.userName))
      .snapshotChanges().map(items => items.map(item => ({ key: item.key, ...item.payload.val() })));
  }

  public getInboxMails(): Observable<any[]> {
    return this.db.list('/messages', ref => ref.orderByChild('emailTo').equalTo(this.authService.userName))
      .snapshotChanges().map(items => items.map(item => ({ key: item.key, ...item.payload.val() })));
  }

  public getMail(key: string): Observable<any> {
    return this.db.object(`/messages/${key}`).valueChanges();
  }
}
