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

  public mail: Mail;

  constructor(
    private route: ActivatedRoute,
    private mailService: MailService
  ) { }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.getMail(id);
  }

  getMail(id: number) {
    this.mailService.getMail(id).subscribe((mail: Mail) => {
      this.mail = mail;
    });
  }

}
