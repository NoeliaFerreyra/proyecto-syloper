import { Component, Input } from '@angular/core';
import { Item } from 'src/app/Interfaces/books.interfaces';

@Component({
  selector: 'app-lista-libros',
  templateUrl: './lista-libros.component.html',
  styles: [
  ]
})
export class ListaLibrosComponent {

  @Input()

  public books: Item[] =[];

}
