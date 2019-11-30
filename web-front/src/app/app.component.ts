import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  menuSideBar = [
    {icon: 'fas fa-boxes', link: '/estoque', nome: 'Estoque'},
    {icon: "fas fa-object-group", link: '/categoria', nome: 'Categorias'},
    {icon: "fas fa-clipboard-list", link: '/tipo-produto', nome: 'Tipo de produto'}
  ]
}