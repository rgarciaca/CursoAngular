import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'contrasena'
})
export class ContrasenaPipe implements PipeTransform {

  transform(value: string, activar: boolean = true): unknown {
  
    if(activar) {
      value = '*'.repeat(value.length);
    } 

    return value;
  }

}
