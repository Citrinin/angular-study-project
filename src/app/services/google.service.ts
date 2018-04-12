import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs/Subject';
import { Mail } from '../@types/mail';
import { Observable } from 'rxjs/Observable';
import { fromPromise } from 'rxjs/observable/fromPromise';
import { map, tap, switchMap } from 'rxjs/operators';

declare var gapi: any;
const CLIENT_ID = '913050155802-1c0udrumjvkfs16pm7vq45qs9mmplv36.apps.googleusercontent.com';
const API_KEY = 'AIzaSyBTYZ1PrVGG_Pjb0nuO4fY3D_U8ISWOgbU';
const DISCOVERY_DOCS = ['https://www.googleapis.com/discovery/v1/apis/gmail/v1/rest'];
const SCOPES = 'https://www.googleapis.com/auth/gmail.readonly';

@Injectable()
export class GoogleService {
  auth2;
  user: any = false;
  constructor(private router: Router) { }

  initClient() {
    gapi.load('client:auth2', () => {
      gapi.client.init({
        apiKey: API_KEY,
        discoveryDocs: DISCOVERY_DOCS,
        clientId: CLIENT_ID,
        scope: SCOPES
      }).then(() => {
        // console.log(gapi.auth2.getAuthInstance().isSignedIn.get());
      });
    });
  }

  b64DecodeUnicode(str) {
    return decodeURIComponent(atob(str).split('').map((c) => {
      return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));
  }


  getMailList() {
    // const result = new Subject<Mail>();
    // gapi.client.gmail.users.messages.list({
    //   'userId': 'me'
    // }).then((response) => {
    //   const messages = response.result.messages;
    //   if (messages && messages.length > 0) {
    //     messages.forEach(message => {
    //       gapi.client.gmail.users.messages.get({
    //         'userId': 'me',
    //         'id': message.id
    //       }).then(resp => {
    //         const from = resp.result.payload.headers.find((item) =>
    //           item.name === 'From'
    //         ).value;
    //         result.next({ from, snippet: resp.result.snippet });
    //       });
    //     });
    //   }
    // });
    // return result;

    fromPromise(gapi.client.gmail.users.messages.list({
      'userId': 'me'
    })).pipe(
      tap(r => console.log(r)),
      map((r: any) => r.result.messages),
      switchMap(
        (message: any) => message.map(m => fromPromise(
          gapi.client.gmail.users.messages.get({
            'userId': 'me',
            'id': m.id
          })
        ))
      ),
      tap(e => console.log(e))
    ).subscribe(p => console.log(p));
  }


  signIn() {
    return gapi.auth2.getAuthInstance().signIn().then(
      response => {
        this.user = response.w3.ig;
        this.router.navigate(['/mail']);
        return this.user;
      }
    );
  }

  signOut() {
    gapi.auth2.getAuthInstance().signOut().then(
      _ => {
        this.router.navigate(['/']);
      }
    );
  }

  ////////////////////////////////////////////////////////////

  // user: any = false;
  // constructor(private router: Router) { }

  // initClient() {
  //   (Promise.resolve()).then(() => {
  //   });
  // }

  // b64DecodeUnicode(str) {
  //   return decodeURIComponent(atob(str).split('').map((c) => {
  //     return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
  //   }).join(''));
  // }


  // getMailList(): Subject<Mail> {
  //   const result = new Subject<Mail>();

  //   Promise.resolve().then(_ => {
  //     result.next({ from: 'Gregory', snippet: 'Gregory mail' });
  //     result.next({ from: 'Anna', snippet: 'Anna mail' });
  //     result.next({ from: 'Inga', snippet: 'Inga mail' });
  //     result.next({ from: 'Catherine', snippet: 'Catherine mail' });
  //   });

  //   return result;
  // }


  // signIn() {
  //   return Promise.resolve().then(
  //     response => {
  //       this.user = 'Katherine';
  //       this.router.navigate(['/mail']);
  //       return this.user;
  //     }
  //   );
  // }

  // signOut() {
  //   return Promise.resolve().then(
  //     _ => {
  //       this.user = '';
  //       this.router.navigate(['/']);
  //     }
  //   );
  // }
}
