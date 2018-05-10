import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent implements OnInit {
  @ViewChild('toggleButton') toggleBtn;
  @Input() items;
  visible = false;
  activeItem = 'Mail';
  mainMenuItems = [
    {
      name: 'Mail',
      link: '/mail'
    },
    {
      name: 'Contacts',
      link: '/contacts'
    },
    {
      name: 'Test',
      link: '/test'
    }
  ];

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
    this.activeItem = '/' + this.router.url.split('/')[1];
  }


  selectionChanged(event) {
    this.router.navigate([event.value]);
  }
}
