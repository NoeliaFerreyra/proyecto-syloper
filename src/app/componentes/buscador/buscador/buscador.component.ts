

import { Component, ElementRef, ViewChild } from '@angular/core';
import { BooksService } from '../../../servicios/books.service';


@Component({
  selector: 'app-buscador',
  template: `
  <h5 class="text-white">Buscar Libros</h5>
  <input type="text"
  class="form-control"
  placeholder="Escribe el nombre del libro..."
  (keyup.enter)="searchTag()"
  #txtTagInput
  >
  `,

})
export class BuscadorComponent {

@ViewChild('txtTagInput')

  public tagInput!: ElementRef<HTMLInputElement>;



  constructor( private BooksService: BooksService) {}



  searchTag(){

    const newTag = this.tagInput.nativeElement.value

    this.BooksService.searchTag(newTag);

    this.tagInput.nativeElement.value = '';


  }
}
