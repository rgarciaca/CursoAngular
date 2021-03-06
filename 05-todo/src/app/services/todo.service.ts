import { Injectable } from '@angular/core';
import { Lista } from '../models/lista.model';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  listas: Lista[] = [];

  constructor() { 
    // const lista1 = new Lista("Recolectar piedras del infinito");
    // const lista2 = new Lista("Heroes a desaparecer");

    // this.listas.push(lista1, lista2);

    this.cargarStorage();
   }

   crearLista( titulo: string ): number {
     const nuevaLista = new Lista(titulo);
     this.listas.push(nuevaLista);
     this.guardarStorage();

     return nuevaLista.id;
   } 

   obtenerLista(id: string | number): Lista {
     id = Number(id);
     
     return this.listas.find( listaData => listaData.id === id );
   }

   guardarStorage() {
     localStorage.setItem( 'data', JSON.stringify( this.listas ) );
   }

   cargarStorage() {
     if (localStorage.getItem( 'data' )) {
       this.listas = JSON.parse( localStorage.getItem( 'data' ) );
     }
   }

   borrarLista(lista: Lista) {
    this.listas = this.listas.filter( listaData => listaData.id !== lista.id );
    this.guardarStorage();
   }


}
