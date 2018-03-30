import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs/Subject';
import { Mail } from '../@types/mail';

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


  getMailList(): Subject<Mail> {
    const result = new Subject<Mail>();
    gapi.client.gmail.users.messages.list({
      'userId': 'me'
    }).then((response) => {
      const messages = response.result.messages;
      if (messages && messages.length > 0) {
        messages.forEach(message => {
          gapi.client.gmail.users.messages.get({
            'userId': 'me',
            'id': message.id
          }).then(resp => {
            const from = resp.result.payload.headers.find((item) =>
              item.name === 'From'
            ).value;
            result.next({ from, snippet: resp.result.snippet });
          });
        });
      }
    });
    return result;
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
}
