import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  menuSideBar = [
    {icon: 'fas fa-boxes', link: '/estoque', nome: 'Estoque'},
    {icon: "fas fa-clipboard-list", link: "", nome: "Cadastros Básicos", showSub: false,submenus: [
      {icon: "", link: '/cor', nome: 'Cores'},
      {icon: "", link: '/tamanho', nome: 'Tamanhos'},
      {icon: "", link: '/tipo-produto', nome: 'Tipo de produto'}
    ]}
  ]

  titlePage: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {

  }

  ngOnInit() {
    this.getTitlePage();
  }

  getTitlePage() {
    this.router.events.subscribe((val) => {
      if (val instanceof NavigationEnd) {
        this.titlePage = this.route.children[0] ? this.route.children[0].snapshot.data['title'] : null;
      }
    });
  }
}