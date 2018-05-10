import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MailService } from '../../services/mail.service';
import { Mail } from '../../@types/mail';


@Component({
  selector: 'app-mail-item',
  templateUrl: './mail-item.component.html',
  styleUrls: ['./mail-item.component.css']
})
export class MailItemComponent implements OnInit {

  public mail: any;

  constructor(
    private route: ActivatedRoute,
    private mailService: MailService
  ) { }

  ngOnInit() {
    const key = this.route.snapshot.paramMap.get('id');
    this.getMail(key);
  }

  getMail(key: string) {
    this.mail = this.mailService.getMail(key);
  }

}
