import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  private _tagsHistory: string[] = [];

  constructor() { }


    get tagHistorythis() {
      return [...this._tagsHistory,]
  }

public searchTag(tag: string): void {
  this._tagsHistory.unshift( tag )
}

}
