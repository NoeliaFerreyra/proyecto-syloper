import { QuienesComponent } from './componentes/nosotros/quienes/quienes.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { PreguntasComponent } from './componentes/nosotros/preguntas/preguntas.component';

const routes: Routes = [
  {
    path: 'inicio',
    component: InicioComponent
  },

  {
    path: 'quienes',
    component: QuienesComponent
  },

  {
    path: 'preguntas',
    component: PreguntasComponent
  },

  {
    path: '**',
    redirectTo: 'inicio'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
