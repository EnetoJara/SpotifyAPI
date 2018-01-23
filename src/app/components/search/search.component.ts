import { Component, OnInit } from '@angular/core';
import {SpotifyService} from '../../services/spotify.service';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent implements OnInit {

  termino:string=''
  constructor(private spotify:SpotifyService) {
  }

  ngOnInit() {}
  buscarArtista() {
    this.spotify.getArtistas(this.termino).subscribe()
  }
}
