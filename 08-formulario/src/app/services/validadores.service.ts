import { Injectable } from '@angular/core';
import { ControlContainer, FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';

export interface ErrorValidate {
  [s: string]: boolean
}

@Injectable({
  providedIn: 'root'
})
export class ValidadoresService {

  constructor() { }

  noHerrera(control: FormControl ) {

    if (control.value?.toLowerCase() === 'herrera') {
      return {
        noHerrera: true
      }
    }

    return null;
  }

  passwordsIguales(name1: string, name2: string) {
    return ( formGroup: FormGroup ) => {
      const control1 = formGroup.controls[name1];
      const control2 = formGroup.controls[name2];

      if (control1.value === control2.value) {
        control2.setErrors(null);
      } else {
        control2.setErrors({ noEsIgual: true });
      }

    }
  }

  existeUsuario(control: FormControl): Promise<any> | Observable<any> {
      return new Promise( (resolve, reject) => {
        setTimeout(() => {
          if (control.value === 'strider') {
            resolve({existe: true});
          } else {
            resolve(null);
          }
        }, 3500);
      })
  }
}
