import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class HomeComponent implements OnInit {

  //paises: any[] = [];

  /*constructor( private http: HttpClient) { 
    this.http.get('https://restcountries.eu/rest/v2/lang/es')
      .subscribe( ( resp: any) => {
          this.paises = resp;
      } );
  }*/

  nuevasCanciones: any[] = [];
  loading: boolean = false;

  constructor( private spotify: SpotifyService ) {

    this.loading = true;

    this.spotify.getNewReleases()
        .subscribe( (data: any) => {
          this.nuevasCanciones = data;
        }); 

    this.loading = false;

  }

  ngOnInit(): void {
  }

}
