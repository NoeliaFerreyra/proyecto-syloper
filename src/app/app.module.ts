import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './componentes/nav-bar/nav-bar.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { BuscadorComponent } from './componentes/buscador/buscador/buscador.component';
import { ListaLibrosComponent } from './componentes/lista-libros/lista-libros.component';
import { QuienesComponent } from './componentes/nosotros/quienes/quienes.component';
import { PreguntasComponent } from './componentes/nosotros/preguntas/preguntas.component';







@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FooterComponent,
    InicioComponent,
    BuscadorComponent,
    ListaLibrosComponent,
    QuienesComponent,
    PreguntasComponent,




  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
