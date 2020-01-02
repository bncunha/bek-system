import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  menuSideBar = [
    {icon: 'fas fa-boxes', link: '/estoque', nome: 'Estoque'},
    {icon: "fas fa-clipboard-list", link: "", nome: "Cadastros Básicos", showSub: false,submenus: [
      {icon: "", link: '/cor', nome: 'Cores'},
      {icon: "", link: '/tamanho', nome: 'Tamanhos'},
      {icon: "", link: '/tipo-produto', nome: 'Tipo de produto'}
    ]}
  ]
}