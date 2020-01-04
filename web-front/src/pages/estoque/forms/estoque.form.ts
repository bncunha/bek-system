import { Form } from 'src/core/classes/form.interface';
import { Produto } from 'src/models/Produto.model';
import { FormGroup, Validators, FormArray } from '@angular/forms';
import { ProdutoDTO } from './ProdutoDTO';
import { Tamanho } from 'src/models/Tamanho.model';
import { QuantidadePorTamanhoDTOForm } from './QuantidadePorTamanhoDTO.form';

export class EstoqueForm extends Form<ProdutoDTO> {

    createForm(model: ProdutoDTO): FormGroup {
        return this.fb.group({
            nome: [model.nome, Validators.required],
            descricao: [model.descricao],
            cor: [model.cor, Validators.required],
            tipoProduto: [model.tipoProduto, Validators.required],
            qtdTamanho: this.fb.array([])
        });
    }

    createQtdTamanhoArray(tamanhos: Tamanho[], form: FormGroup) {
        const array = <FormArray> form.get('qtdTamanho');
        this.zerarFormArray(array);
        tamanhos.forEach((t: any) => {
            array.push(this.fb.group({
                tamanho: t.idTamanho,
                quantidadeInicial: t.quantidadeInicial ? t.quantidadeInicial : 0
            }));
        })
    }

    updateForm(form: FormGroup, model: any) {
        form.patchValue(model);
        form.patchValue({
            cor: model.cor.idCorProduto,
            tipoProduto: model.tipoProduto.idTipoProduto
        });
        this.createQtdTamanhoArray(model.produtoTamanho.map(pt => {
            pt.tamanho.quantidadeInicial = pt.quantidade
            return pt.tamanho
        }), form);
    }

}