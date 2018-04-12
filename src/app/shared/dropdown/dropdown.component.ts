import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { fromEvent } from 'rxjs/observable/fromEvent';

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
