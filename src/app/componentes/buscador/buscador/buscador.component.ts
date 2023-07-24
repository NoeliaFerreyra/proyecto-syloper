import { Component } from '@angular/core';

@Component({
  selector: 'app-buscador',
  template: `
  <h5 class="text-white">Buscar Libros</h5>
  <input type="text"
  class="form-control"
  placeholder="Escribe el nombre del libro..."
  >

  `,

})
export class BuscadorComponent {
  constructor() {}

}
