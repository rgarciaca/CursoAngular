import { Component } from '@angular/core';
import { TodoService } from 'src/app/services/todo.service';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Lista } from '../../models/lista.model';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {



  constructor( public _todoService: TodoService,
            private router: Router,
            private alertCtrl: AlertController ) {}

  async agregarLista() {
    //this.router.navigateByUrl('tabs/tab1/agregar');
  
    const alert = await this.alertCtrl.create({
      header: 'Nueva lista',
      inputs: [
        {
          name: 'titulo',
          type: 'text',
          placeholder: 'Nombre de la lista'
        }
      ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
  
          }
        },
        {
          text: 'Crear',
          handler: ( data ) => {
            if (data.titulo.length > 0 ) {
              const listaId = this._todoService.crearLista(data.titulo);
  
              this.router.navigateByUrl(`tabs/tab1/agregar/${ listaId }`);
            } else {
              return;
            }
          }
        }
      ]
    });
  
    alert.present();
  
  }

  itemsCompletados( lista: Lista ): number {
    return lista.items
            .filter( itemData => itemData.completado )
            .length;
  }

  listaSeleccionada( lista: Lista ) {
    this.router.navigateByUrl(`tabs/tab1/agregar/${ lista.id }`);
  }

}
