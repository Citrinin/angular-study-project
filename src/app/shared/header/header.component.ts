import { Component, OnInit, ChangeDetectionStrategy, ViewEncapsulation, AfterViewInit } from '@angular/core';
import { GoogleService } from '../../services/google.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, AfterViewInit {

  constructor(private googleService: GoogleService) { }

  isSignIn = false;
  userName: string;

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    setTimeout(() => this.googleService.initClient(), 1000);
  }

  updateSigninStatus(isSignedIn) {
    this.isSignIn = isSignedIn;
  }

  handleAuthClick() {
    this.googleService.signIn().then(userName => this.userName = userName);
    this.isSignIn = true;
  }


  handleSignoutClick() {
    this.googleService.signOut();
    this.isSignIn = false;
  }

}
