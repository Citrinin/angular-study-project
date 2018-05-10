import { Component, OnInit, Input } from '@angular/core';
import { MailService } from '../../services/mail.service';
import { Mail } from '../../@types/mail';
import { tap } from 'rxjs/operators';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-mail-list',
  templateUrl: './mail-list.component.html',
  styleUrls: ['./mail-list.component.css']
})
export class MailListComponent implements OnInit {

  public mails: Observable<any[]>;
  public page: string;

  constructor(
    private mailService: MailService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.page = this.route.snapshot.routeConfig.path;
    if (this.page === 'sent') {
      this.mails = this.mailService.getSentMails();
    } else {
      this.mails = this.mailService.getInboxMails();
    }
    // this.getMail();
  }

  // getMail(): void {
  //   this.mailService.getMails()
  //     .pipe(
  //       tap(mails => this.mails = mails)
  //     ).subscribe();
  // }

}
