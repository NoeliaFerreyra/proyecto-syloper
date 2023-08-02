import { QuienesComponent } from './componentes/nosotros/quienes/quienes.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { PreguntasComponent } from './componentes/nosotros/preguntas/preguntas.component';
import { RecomendadosComponent } from './componentes/footer/recomendados/recomendados.component';
import { FormularioInscripcionComponent } from './componentes/formulario-inscripcion/formulario-inscripcion.component';



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
    path: 'recomendados',
    component: RecomendadosComponent
  },

  {
    path: 'formulario-inscripcion',
    component: FormularioInscripcionComponent
  },


  {
    path: '**',
    redirectTo: 'inicio'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
