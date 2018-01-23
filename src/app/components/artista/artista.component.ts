import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {SpotifyService} from '../../services/spotify.service';
@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styleUrls: []
})
export class ArtistaComponent implements OnInit {
  artista:any = {}
  pistas:any[]
  constructor(private activatedRouter:ActivatedRoute, private spotify:SpotifyService) { }

  ngOnInit() {
    this.activatedRouter.params.map(parametros=>parametros['id']).subscribe(id=>{
    this.spotify.getArtista(id).subscribe(artista => this.artista = artista)
    this.spotify.getTop(id).subscribe(pistas => this.pistas = pistas)
    })
  }

}
