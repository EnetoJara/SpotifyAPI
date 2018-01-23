import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpModule} from '@angular/http';
import {FormsModule} from '@angular/forms';
//rutas
import {app_routing} from './app.routes';
//servicios
import {SpotifyService} from './services/spotify.service';
//componenetes
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { SinFotoPipe } from './pipes/sin-foto.pipe';
import { ArtistaComponent } from './components/artista/artista.component';
import { DomseguroPipe } from './pipes/domseguro.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent,
    NavbarComponent,
    SinFotoPipe,
    ArtistaComponent,
    DomseguroPipe
  ],
  imports: [
    FormsModule,
    HttpModule,
    BrowserModule,
    app_routing
  ],
  providers: [SpotifyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
