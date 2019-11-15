import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-categoria',
  templateUrl: './form-categoria.component.html',
  styleUrls: ['./form-categoria.component.scss']
})
export class FormCategoriaComponent implements OnInit {
  @Input() form = new FormGroup({
    nome: new FormControl(null, [Validators.required])
  });
  constructor() { }

  ngOnInit() {
  }

}
