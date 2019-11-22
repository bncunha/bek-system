import { Component, OnInit } from '@angular/core';
import { TipoProduto } from 'src/models/TipoProduto.model';
import { TipoProdutoForm } from '../forms/tipo-produto.form';
import { TipoProdutoService } from 'src/services/tipo-produto.service';
import { Router, ActivatedRoute } from '@angular/router';
import { TipoProdutoControllerService } from '../controllers/tipo-produto-controller.service';

@Component({
  selector: 'app-form-tipo-produto',
  templateUrl: './form-tipo-produto.component.html',
  styleUrls: ['./form-tipo-produto.component.scss']
})
export class FormTipoProdutoComponent implements OnInit {
  id: string;
  model = new TipoProduto();
  form = new TipoProdutoForm().createForm(this.model);

  constructor(
    private controller: TipoProdutoControllerService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    if (this.id) {
      this.controller.getOne(this.id).subscribe(r => this.form.patchValue(r.data))
    }
  }

  async submit() {
    this.id ? await this.controller.update(this.form, this.id) : await this.controller.insert(this.form);
  }

}
