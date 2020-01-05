import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'lib-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss']
})
export class FiltersComponent implements OnInit {
  @Output() filtrar = new EventEmitter();
  @Input() formGroup: FormGroup;

  constructor(
  ) { }

  ngOnInit() {
  }

  limparFiltros() {
    this.formGroup.reset();
    this.filtrar.emit(this.formGroup.value);
  }
  
  executarFiltros() {
    this.filtrar.emit(this.formGroup.value);
  }

}
