import { Component, OnInit } from '@angular/core';
import { TodoService } from 'src/app/services/todo.service';
import { ActivatedRoute } from '@angular/router';
import { Lista } from '../../models/lista.model';
import { ListaItem } from '../../models/lista-item.model';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.page.html',
  styleUrls: ['./agregar.page.scss'],
})
export class AgregarPage implements OnInit {

  lista: Lista;
  nombreItem: string = '';

  constructor( private _todoService: TodoService,
              private route: ActivatedRoute) { 
    
      const listaId = this.route.snapshot.paramMap.get('listaId');

      this.lista = this._todoService.obtenerLista(listaId);
  }

  ngOnInit() {
  }

  agregarItem() {
    if ( this.nombreItem.length === 0) {
      return;
    }

    const nuevoItem = new ListaItem( this.nombreItem );
    this.lista.items.push( nuevoItem );

    this.nombreItem = '';
    this._todoService.guardarStorage();
  }

  cambioCheck( item: ListaItem ) {

    const pendientes = this.lista.items
            .filter( itemData => !itemData.completado )
            .length;

    if(pendientes === 0) {
      this.lista.terminadaEn = new Date();
      this.lista.completada = true;
    } else {
      this.lista.terminadaEn = null;
      this.lista.completada = false;
    }

    this._todoService.guardarStorage();
  }


  borrar(idx: number) {
    this.lista.items.splice( idx, 1 );
    this._todoService.guardarStorage();
  }

}
