import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-header-content',
  templateUrl: './header-content.component.html',
  styleUrls: ['./header-content.component.scss']
})
export class HeaderContentComponent implements OnInit {
  private IP_BACKEND_KEY = 'ipBackend'
  constructor() { }

  ngOnInit() {
    environment.backEndUrl = localStorage.getItem(this.IP_BACKEND_KEY) || environment.backEndUrl;
  }

  changeIP(ip) {
    localStorage.setItem(this.IP_BACKEND_KEY, ip);
    environment.backEndUrl = ip;
  }

  get ipBackend() {
    return environment.backEndUrl;
  }

}
