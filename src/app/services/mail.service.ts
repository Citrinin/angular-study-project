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

  private category: string;
  private startWithKey: string;
  private endAtKey: string;

  constructor(
    private http: HttpClient,
    private db: AngularFireDatabase,
    private authService: AuthService
  ) {
  }


  public getContacts(): Observable<Contact[]> {
    return this.http.get<Contact[]>(`${config.url}/users`);
  }


  public addUser(email: string): Observable<any> {
    return from(this.db.list('users').push({ email }));
  }

  public sendMessage(emailTo: string, subject: string, message: string): Observable<any> {
    let emailFrom = this.authService.userName;
    let timeStamp = (new Date()).getTime();
    return from(this.db.list('messages')
      .push({
        emailFrom: emailFrom,
        date: timeStamp,
        emailTo,
        subject,
        message,
        isNew: true,
        emailFromKey: `${emailFrom}_${timeStamp}`,
        emailToKey: `${emailTo}_${timeStamp}`,
      }));
  }

  // public getSentMails(): Observable<any[]> {
  //   return this.db.list('/messages', ref => ref.orderByChild('emailFrom').equalTo(this.authService.userName).limitToLast(10))
  //     .snapshotChanges()
  //     .pipe(
  //       map(items => items.map(item => ({ key: item.key, ...item.payload.val() }))),
  //       map(items => items.reverse())
  //     )
  // }

  public getMails(category: string): Observable<any[]> {

    return this.db.list('/messages', ref => ref
      .orderByChild(`email${category === 'sent' ? 'From' : 'To'}Key`)
      .endAt(this.endAtKey)
      .startAt(this.startWithKey)
      .limitToLast(11)
    )
      .snapshotChanges()
      .pipe(
        map(items => items.map(item => ({ key: item.key, ...item.payload.val() }))),
        tap(items => {
          this.endAtKey = `${this.authService.userName}_${category}_${items.length !== 0 ? items[0].date : ''}`;
          //  this.startWithKey = `${this.authService.userName}_${category}_${items.length !== 0 ? items[items.length - 1].date : ''}`;
        }),
        map(items => {
          if (items.length >= 11) {
            items.splice(0, 1);
          }
          return items.reverse();
        })
      );
  }

  // getInboxMailsNextPage(): Observable<any[]> {
  //   return this.db.list('/messages', ref => ref.orderByChild('syntheticInboxkey').endAt(this.lastKey).limitToLast(11))
  //     .snapshotChanges()
  //     .pipe(
  //       map(items => items.map(item => ({ key: item.key, ...item.payload.val() }))),
  //       tap(items => this.lastKey = items[0].key),
  //       map(items => {
  //         items.splice(0, 1);
  //         return items.reverse();
  //       })
  //     );
  // }

  // getInboxMailsPrevPage(): Observable<any[]> {
  //   return this.db.list('/messages', ref => ref.orderByChild('syntheticInboxkey').endAt(this.lastKey).limitToLast(10))
  //     .snapshotChanges()
  //     .pipe(
  //       map(items => items.map(item => ({ key: item.key, ...item.payload.val() }))),
  //       tap(items => this.lastKey = items[0].key),
  //       map(items => items.reverse())
  //     );
  // }

  public getMail(key: string, isNewFlag: boolean): Observable<any> {
    let mail$ = this.db.object(`/messages/${key}`).valueChanges();
    if (isNewFlag) {
      mail$.subscribe((mail: any) => {
        if (mail.isNew) {
          this.db.object(`/messages/${key}`).set({ ...mail, isNew: false });
        }
      });
    }
    return mail$;
  }
}
