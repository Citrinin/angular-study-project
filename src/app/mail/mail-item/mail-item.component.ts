import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MailService } from '../../services/mail.service';
import { Mail } from '../../@types/mail';


@Component({
  selector: 'app-mail-item',
  templateUrl: './mail-item.component.html',
  styleUrls: ['./mail-item.component.css']
})
export class MailItemComponent implements OnInit {

  public mail: any;
  public page: string;

  constructor(
    private route: ActivatedRoute,
    private mailService: MailService,
    private router: Router
  ) { }

  ngOnInit() {
    const key = this.route.snapshot.paramMap.get('id');
    this.page = this.route.snapshot.paramMap.get('page')
    this.getMail(key);
  }

  getMail(key: string) {
    this.mail = this.mailService.getMail(key, this.page === 'inbox');
  }

  goBack() {
    this.router.navigate([`/mail/${this.page}`])
  }

}
