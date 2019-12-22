import { Component, OnInit, forwardRef, Input, ViewChild, HostBinding } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';
import { SelectComponent } from '../../atoms/select/select.component';

@Component({
  selector: 'lib-form-select',
  templateUrl: './form-select.component.html',
  styleUrls: ['./form-select.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => FormSelectComponent),
      multi: true
    }
  ]
})
export class FormSelectComponent implements OnInit, ControlValueAccessor {
  @ViewChild(SelectComponent) input: SelectComponent;
  @Input() data: any[];
  @Input() label: string;
  @Input() bindLabel: string;
  @Input() bindValue: string;

  @HostBinding('class.multiple')
  @Input() multi: boolean = false;
  
  isFloating: boolean = false;
  idInput: string;

  onChange = (value: string) => {};
  onTouched = () => {};
  constructor() { }
  
  ngOnInit() {
    this.gerarIdInput();
    this.input.selectValue.valueChanges.subscribe(v => {
      this.onChange(v);
      this.detectFloat();
    });
  }

  detectFloat(event?: 'FOCUS' | 'BLUR') {
    this.isFloating = event == 'FOCUS' || 
    (this.input.selectValue.value != null && this.input.selectValue.value != undefined && this.input.selectValue.value != '');
    if (event == 'FOCUS') {
      this.onTouched();
    }
  }

  gerarIdInput() {
    this.idInput = this.label + new Date().getTime();
  }

  writeValue(obj: any): void {
    this.input.selectValue.patchValue(obj, {emitEvent: false});
    this.detectFloat();
  }
  
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    throw new Error("Method not implemented.");
  }

}
