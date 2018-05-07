import { Component, OnInit, Input, ViewChild } from '@angular/core';

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
      link: '/mail/list'
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

  constructor() { }

  ngOnInit() {
  }

  toggle(): void {
    this.visible = !this.visible;
  }

  clickHandler(item): void {

    this.activeItem = item.name;
    this.toggle();
  }



}
