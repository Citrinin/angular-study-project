import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { MailService } from '../../services/mail.service';
import { Mail } from '../../@types/mail';
import { tap } from 'rxjs/operators';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-mail-list',
  templateUrl: './mail-list.component.html',
  styleUrls: ['./mail-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush

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
      this.mails = this.mailService.getMails('sent');
    } else {
      this.mails = this.mailService.getMails('inbox');
    }
  }

  // public nextPage() {
  //   this.mails = this.mailService.getInboxMailsNextPage();
  // }

}
