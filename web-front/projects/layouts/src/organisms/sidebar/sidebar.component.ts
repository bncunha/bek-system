import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'lib-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  @Input() menus: {icon: string, link: string, nome: string, showSub: boolean, submenus: any[]}[];
  constructor() { }

  ngOnInit() {
  }

  toggleSub(menu) {
    menu.showSub = !menu.showSub;
  }
}
