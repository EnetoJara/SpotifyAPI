import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map'
@Injectable()
export class SpotifyService {
  headers:string = 'Bearer BQDCXXC-Jdc1DM3zoLEje4pF8mzMBFvdIuDhkR6lS41v614Bm7Ea3W-gqHCbRXoE1cywH4IB-DDiDqfER0e1bQ'
  artistas:any[] = []
  urlBusqueda:string = 'https://api.spotify.com/v1/search'
  urlArtista:string = 'https://api.spotify.com/v1/artists/'
  constructor(private http:Http) { }
  /**
   * [getArtistas description]
   * @param  {string} termino [description]
   * @return {[type]}         [description]
   */
  getArtistas(termino:string) {
    let headers = new Headers()
    headers.append('authorization', this.headers)
    let query:string = `?q=${termino}&type=artist`
    let url:string = this.urlBusqueda+query

    return this.http.get(url,{headers}).map(res => {
      this.artistas = res.json().artists.items })
  }
  /**
   * [getArtista description]
   * @param  {string} id [description]
   * @return {[type]}    [description]
   */
  getArtista(id:string) {
    let headers = new Headers()
    headers.append('authorization', this.headers)
    let query:string = `${id}`
    let url:string = this.urlArtista + query
    return this.http.get(url,{headers}).map(res => {
      return res.json()
    })
  }

  getTop(id:string) {
    let headers = new Headers()
    headers.append('authorization', this.headers)
    let query:string = `${id}/top-tracks?country=MX`
    let url:string = this.urlArtista + query
    return this.http.get(url,{headers}).map(res => {
      return res.json().tracks
    })
  }
}
