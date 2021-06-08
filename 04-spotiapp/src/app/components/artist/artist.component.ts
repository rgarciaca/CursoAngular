import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styles: [
  ]
})
export class ArtistComponent implements OnInit {

  artista: any = {};
  tracks: any[] = [];

  loading: boolean = false;

  constructor( private router: ActivatedRoute, 
     private spotify: SpotifyService ) { 
    this.router.params.subscribe( params => {
      this.getArtista( params['id'] );
      this.getTopTracks( params['id'] );
    });
  }

  ngOnInit(): void {
  }

  getArtista(id: string) {
    this.loading = true;

    this.spotify.getArtista(id).subscribe( artista => {
      this.artista = artista;

      this.loading = false;
    });
  }

  getTopTracks(id: string) {
      this.spotify.getTopTracks(id).subscribe( topTracks => {
      this.tracks = topTracks;
      console.log(this.tracks);
    });
  }

}
