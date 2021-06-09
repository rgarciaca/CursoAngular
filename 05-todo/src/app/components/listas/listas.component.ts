import { Component, Input, ViewChild } from '@angular/core';
import { TodoService } from 'src/app/services/todo.service';
import { Router } from '@angular/router';
import { AlertController, IonList } from '@ionic/angular';
import { Lista } from '../../models/lista.model';

@Component({
  selector: 'app-listas',
  templateUrl: './listas.component.html',
  styleUrls: ['./listas.component.scss'],
})
export class ListasComponent {
  @ViewChild( IonList)  lista: IonList;

  @Input() completadas: boolean;

  constructor( public _todoService: TodoService,
    private router: Router,
    private alertCtrl: AlertController ) {

      this.completadas = false;
      console.log(this._todoService.listas);

  }

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

  async editarLista( lista: Lista) {
    const alert = await this.alertCtrl.create({
      header: 'Editar lista',
      inputs: [
        {
          name: 'titulo',
          type: 'text',
          placeholder: 'Nombre de la lista',
          value: lista.titulo
        }
      ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
            this.lista.closeSlidingItems();
          }
        },
        {
          text: 'Guardar',
          handler: ( data ) => {
            if (data.titulo.length > 0 ) {
              lista.titulo = data.titulo;
              this._todoService.guardarStorage();

              this.lista.closeSlidingItems();

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
    if (this.completadas) {
      this.router.navigateByUrl(`tabs/tab2/agregar/${ lista.id }`);
    } else {
      this.router.navigateByUrl(`tabs/tab1/agregar/${ lista.id }`);
    }
  }

  borrar( lista: Lista ) {
     this._todoService.borrarLista( lista );
  }

}
