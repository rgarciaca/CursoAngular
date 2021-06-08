import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor( private http: HttpClient) { }

  getQuery ( query: string ) {
    const url = `https://api.spotify.com/v1/${ query }`;

    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQBKsKMf6oaulR-MqhAaqvPQg24divM1y5NCkEo0lc0JJDd-k7tun9DaR2nOcNlQPRSHs5WnxdS73Je8kwQ'
    });

    return this.http.get( url, { headers } );
  }

  getNewReleases() {

    return this.getQuery( 'browse/new-releases?limit=21')
              .pipe( map( data => data['albums'].items ) );
  }

  getArtistas( termino:string ) {

    return this.getQuery( `search?q=${ termino }&type=artist&limit=15` )
              .pipe( map( data => data['artists'].items ) );

  }

  getArtista( id: string ) {

    return this.getQuery( `artists/${ id }` );
              //.pipe( map( data => data['artist'].items ) );

  }

  getTopTracks( id: string ) {

    return this.getQuery( `artists/${ id }/top-tracks?market=es` )
              .pipe( map( data => data['tracks'] ) );

  }
}
