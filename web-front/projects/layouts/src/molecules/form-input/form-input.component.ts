import { Component, OnInit, Input, ViewChild, ElementRef, forwardRef, AfterViewInit, OnChanges, Injector } from '@angular/core';
import { InputComponent } from '../../atoms/input/input.component';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, NG_VALIDATORS, FormControl } from '@angular/forms';

@Component({
  selector: 'lib-form-input',
  templateUrl: './form-input.component.html',
  styleUrls: ['./form-input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => FormInputComponent),
      multi: true
    }
  ]
})
export class FormInputComponent implements OnInit, ControlValueAccessor {
  @ViewChild(InputComponent) input: InputComponent;
  @Input() label: string;
  
  isFloating = false;
  idInput: string;

  valid: boolean;

  onChange = (value: string) => {};
  onTouched = () => {};

  constructor(private inj: Injector) { }
  
  ngOnInit() {
    this.gerarIdInput();
    this.input.value.valueChanges.subscribe(v => {
      this.onChange(v);
      this.detectFloat();
    });
  }
  
  detectFloat(event?: 'FOCUS' | 'BLUR') {
    this.isFloating = event == 'FOCUS' || (this.input.value.value != null && this.input.value.value != undefined && this.input.value.value != '');
    if (event == 'FOCUS') {
      this.onTouched();
    }
  }
  
  gerarIdInput() {
    this.idInput = this.label + new Date().getTime();
  }

  writeValue(obj: string): void {
    this.input.value.patchValue(obj, {emitEvent: false});
    this.detectFloat();
  }

  get erroMsg() {
    return '1'
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
