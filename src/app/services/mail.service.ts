import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, from } from 'rxjs';
import { Mail } from '../@types/mail';
import { Contact } from '../@types/contact';
import { config } from '../config/config';
import { UserService } from './user.service';
import { AuthService } from './auth.service';
import { map, tap } from 'rxjs/operators';
import { AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  })
};

@Injectable()
export class MailService {

  private category: string;
  private lastVisible;
  private firstVisible;
  private firstMessage;

  constructor(
    private http: HttpClient,
    private authService: AuthService,
    private afs: AngularFirestore
  ) {
    afs.firestore.settings({ timestampsInSnapshots: true });
  }


  public getContacts(): Observable<Contact[]> {
    return this.http.get<Contact[]>(`${config.url}/users`);
  }


  public addUser(email: string): Observable<any> {
    return from(this.afs.doc(`users/${email}`).set({}));
  }

  public chechEmailIsExist(email: string): any {
    return this.afs.doc(`users/${email}`).valueChanges();
  }

  public sendMessage(emailTo: string, subject: string, message: string): Observable<any> {
    let emailFrom = this.authService.userName;
    let timeStamp = (new Date()).getTime();
    return from(this.afs.collection('messages')
      .add({
        emailFrom: emailFrom,
        date: timeStamp,
        emailTo,
        subject,
        message,
        isNew: true
      }));
  }

  public getMails(category: string, amount: number): Observable<any> {
    if (this.category !== category) {
      this.category = category;
      this.lastVisible = null;
      this.firstMessage = null;
    }
    return this.afs.collection('/messages', ref => ref
      .where(`email${category === 'sent' ? 'From' : 'To'}`, '==', this.authService.userName)
      .orderBy('date', 'desc')
      .limit(amount))
      .snapshotChanges()
      .pipe(
        tap(items => {
          this.lastVisible = items.length < amount ? null : items[items.length - 1].payload.doc;
          this.firstMessage = items[0].payload.doc;
        }),
        map(items => {
          return {
            mails: items.map(item => {
              const data = item.payload.doc.data();
              const key = item.payload.doc.id;
              return { key, ...data }
            }), isPrevPage: false, isNextPage: items.length === amount
          };
        }),
    );
  }

  getMailsNextPage(category: string, amount: number): Observable<any> | null {
    if (this.lastVisible) {

      return this.afs.collection('/messages', ref => ref
        .where(`email${category === 'sent' ? 'From' : 'To'}`, '==', this.authService.userName)
        .orderBy('date', 'desc')
        .startAfter(this.lastVisible)
        .limit(10))
        .snapshotChanges()
        .pipe(
          tap(items => {
            this.lastVisible = items.length < amount ? null : items[items.length - 1].payload.doc;
            this.firstVisible = items[0].payload.doc;
          }),
          map(items => {
            return {
              mails: items.map(item => {
                const data = item.payload.doc.data();
                const key = item.payload.doc.id;
                return { key, ...data }
              }), isPrevPage: this.firstMessage.id !== this.firstVisible.id, isNextPage: items.length === amount
            };
          }),
      );
    }
    return null;
  }


  public getMailsPrevPage(category: string, amount: number) {
    if (this.firstVisible) {
      return this.afs.collection('/messages', ref => ref
        .where(`email${category === 'sent' ? 'From' : 'To'}`, '==', this.authService.userName)
        .orderBy('date', 'desc')
        .endBefore(this.firstVisible)
        .limit(amount))
        .snapshotChanges()
        .pipe(
          tap(items => {
            this.lastVisible = items.length < 10 ? null : items[items.length - 1].payload.doc;
            this.firstVisible = items[0].payload.doc;
          }),
          map(items => {
            return {
              mails: items.map(item => {
                const data = item.payload.doc.data();
                const key = item.payload.doc.id;
                return { key, ...data }
              }), isPrevPage: this.firstMessage.id !== this.firstVisible.id, isNextPage: items.length === amount
            };
          }),
      );
    }
    return;
  }

  public getMail(key: string, isNewFlag: boolean): Observable<any> {
    let mail$ = this.afs.doc(`/messages/${key}`).valueChanges();
    if (isNewFlag) {
      mail$.subscribe((mail: any) => {
        if (mail.isNew) {
          this.afs.doc(`/messages/${key}`).update({ ...mail, isNew: false });
        }
      });
    }
    return mail$;
  }

  public test() {
    return this.afs.collection(`/messages/`, ref => ref.limit(1)).valueChanges();
  }

  public goBack() {

  }
}
