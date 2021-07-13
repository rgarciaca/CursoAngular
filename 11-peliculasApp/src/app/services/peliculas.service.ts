import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { tap, map, catchError } from 'rxjs/operators';
import { CarteleraResponse, Movie } from '../interfaces/cartelera-response';
import { MovieDetails } from '../interfaces/movie-details';
import { CreditsResponse, Cast } from '../interfaces/credits-response';

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {

  private baseUrl: string = 'https://api.themoviedb.org/3';
  private carteleraPage = 1;

  public cargando: boolean = false;

  constructor( private http: HttpClient ) { }

  get params() {
    return {
      api_key: '02949891299bd7f3a97e1af6b0f1b61d',
      language: 'es-ES',
      page: this.carteleraPage.toString(),
      include_adult: true
    }
  }

  resetCarteleraPage() {
    this.carteleraPage = 1;
  }

  getCartelera(): Observable<Movie[]> {

   if( this.cargando ) {
     return of([]);
   }

    this.cargando = true;

    return this.http.get<CarteleraResponse>(`${ this.baseUrl }/movie/now_playing`, { 
        params: this.params 
      } ).pipe( 
        map( (resp) => resp.results ),
        tap( () => {
          this.carteleraPage += 1;
          this.cargando = false;
        })
    );
  }

  buscarPeliculas(texto: string): Observable<Movie[]> {
    const params = {...this.params, page: '1', query: texto };
 
    //https://api.themoviedb.org/3/search/movie?api_key=02949891299bd7f3a97e1af6b0f1b61d&language=es-ES&page=1&include_adult=true
    return this.http.get<CarteleraResponse>(`${ this.baseUrl }/search/movie`, {
      params: params
    }).pipe(
      map( resp => resp.results )
    );
  }

  getPelicula(id: string){
    //https://api.themoviedb.org/3/movie/337401?api_key=02949891299bd7f3a97e1af6b0f1b61d&language=es-ES
     return this.http.get<MovieDetails>(`${ this.baseUrl }/movie/${ id }`, { 
         params: this.params 
       } ).pipe(
         catchError( err => of(null))
       );
  }

  getCast(id: string):Observable<Cast[]> {
    //https://api.themoviedb.org/3/movie/497698/credits?api_key=02949891299bd7f3a97e1af6b0f1b61d&language=es-ES
     return this.http.get<CreditsResponse>(`${ this.baseUrl }/movie/${ id }/credits`, { 
         params: this.params 
        }).pipe(
          map( resp => resp.cast ),
          catchError( err => of([]))
        );
  }
}
