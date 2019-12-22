import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CategoriaForm } from '../forms/categoria.form';
import { Categoria } from 'src/models/Categoria.model';
import { CategoriaControllerService } from '../controllers/categoria-controller.service';
import { Router, Route, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-form-categoria',
  templateUrl: './form-categoria.component.html',
  styleUrls: ['./form-categoria.component.scss']
})
export class FormCategoriaComponent implements OnInit {
  id: string;
  model = new Categoria();
  form = new CategoriaForm().createForm(this.model);

  constructor(
    private categoriaController: CategoriaControllerService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    // this.id = this.route.snapshot.params['id'];
    // if (this.id) {
    //   this.categoriaController.getOne(this.id).subscribe(r => this.form.patchValue(r.data))
    // }
  }

  async submit() {
    // this.id ? await this.categoriaController.update(this.form, this.id) : await this.categoriaController.insert(this.form);
  }

}
