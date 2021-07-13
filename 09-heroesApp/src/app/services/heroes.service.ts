import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { HeroeModel } from '../models/heroe.model';
import { map, delay } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  private url: string = 'https://heroes-87fb7-default-rtdb.europe-west1.firebasedatabase.app'

  constructor( private _http: HttpClient ) { }

  crearHeroe(heroe: HeroeModel) {
    return this._http.post(`${ this.url }/heroes.json`, heroe)
          .pipe(
            map( (resp: any) => {
              heroe.id = resp.name;

              return heroe;
            })
          );
  }

  actualizarHeroe(heroe: HeroeModel) {

    const heroeTemp = {
      ...heroe
    };

    delete heroeTemp.id;

    return this._http.put(`${ this.url }/heroes/${ heroe.id}.json`, heroeTemp);
  }

  borrarHeroe( id: string ) {
    return this._http.delete(`${ this.url}/heroes/${ id }.json`);
  } 

  getHeroe( id: string ) {
    return this._http.get(`${ this.url}/heroes/${ id }.json`);
  }

  getHeroes() {
    return this._http.get(`${ this.url }/heroes.json`)
        .pipe(
          map( this.crearArray ),
          delay(1000)
        );
  }

  private crearArray( heroesObj: object ) { 
    const heroes: HeroeModel[] = [];

    if ( heroesObj === null ) { return []; }

    Object.keys( heroesObj ).forEach( key => {
      const heroe: HeroeModel = heroesObj[key];
      heroe.id = key;

      heroes.push(heroe);
    });

    return heroes;
  }
}
