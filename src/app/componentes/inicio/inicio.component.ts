import { Component } from '@angular/core';
import { BooksService } from '../../servicios/books.service';
import { Item } from 'src/app/Interfaces/books.interfaces';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent {

  constructor( private BooksService: BooksService) {}

  get books() : Item[] {

    return this.BooksService.bookList;
  }

}
