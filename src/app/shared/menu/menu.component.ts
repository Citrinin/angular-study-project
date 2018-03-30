import { Component, OnInit, Input } from '@angular/core';
import { MenuItem } from '../../models/menu-item';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  @Input()
  menuItems: MenuItem[];

  constructor() { }

  ngOnInit() {
  }

}
