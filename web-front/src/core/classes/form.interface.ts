import { FormGroup, FormBuilder, FormArray } from '@angular/forms';

export abstract class Form<T> {
    fb = new FormBuilder();
    constructor() {

    }

    abstract createForm(model: T): FormGroup;

    getFormValue(form: FormGroup) {
        return Object.assign({}, form.value);
    }

    updateForm(form: FormGroup, model: any) {
        form.patchValue(model);
    }

    zerarFormArray(formArray: FormArray) {
        while (formArray.length != 0) {
          formArray.removeAt(0);
        }
      }
    
}