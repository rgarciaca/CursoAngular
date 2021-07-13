import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidadoresService } from '../../services/validadores.service';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})
export class ReactiveComponent implements OnInit {

  forma: FormGroup= new FormGroup({});

  constructor(private fb: FormBuilder,
    private validadores: ValidadoresService) { 

    this.crearFormulario();
    this.cargarDatos();


  }

  ngOnInit(): void {
    
  }

  get pasatiempos() {
    return this.forma.get('pasatiempos') as FormArray;
  }

  campoNoValido(campo: string) {
    return this.forma.get(campo)?.invalid && this.forma.get(campo)?.touched;
  }

  passNoValido() {
    const pass1 = this.forma.get('pass1')?.value;
    const pass2 = this.forma.get('pass2')?.value;
    return (pass1 === pass2) ? false : true;
  }


  crearFormulario() {
    this.forma = this.fb.group({
      nombre: ['', [Validators.required, Validators.minLength(5)]],
      apellido: ['', [Validators.required, Validators.minLength(5), this.validadores.noHerrera]],
      correo: ['', [Validators.required, Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$")]],
      usuario: ['', , this.validadores.existeUsuario],
      pass1: ['', Validators.required ],
      pass2: ['', Validators.required ],
      direccion: this.fb.group({
        distrito: ['', Validators.required ],
        ciudad: ['', Validators.required ]
      }),
      pasatiempos: this.fb.array([
      ])
    }, {
      validators: this.validadores.passwordsIguales('pass1', 'pass2')
    });
  }

  cargarDatos() {
    //this.forma.setValue({
    this.forma.reset({
      nombre: 'Roberto',
      apellido: 'Garcia Cañete',
      correo: 'rgarciaca@outlook.com',
      direccion: {
        distrito:'vdjwpvmwrp',
        ciudad: 'wvpiewriv'
      }

    });
  }

  guardar() {
    console.log(this.forma);

    if (this.forma.invalid) {
      return Object.values(this.forma.controls).forEach( control => {

        if(control instanceof FormGroup) {
          Object.values(control.controls).forEach( control => control.markAsTouched());
        } else {
          control.markAsTouched();
        }        
      });
    }

    this.forma.reset({
      nombre: 'ewibfiwebf'
    });
  }

  agregarPasatiempo() {
    this.pasatiempos.push( this.fb.control('', Validators.required));
  }

  borrarPasatiempo(i: number) {
    this.pasatiempos.removeAt(i);
  }
}
