import { Item, SearchResponse } from './../Interfaces/books.interfaces';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class BooksService {

  public bookList: Item[] =[];

  private _tagsHistory: string[] = [];
  private apikey= 'AIzaSyAzI5DSWYTMfoGdLZyaC0JWZ8DTP_kJw9Q';
  private Authorization?: ['661742161429-e807u3662l82thlg18mh47a5si6av5bd.apps.googleusercontent.com']
  private serviceUrl: string = 'https://www.googleapis.com/books';

  constructor( private http: HttpClient) { }


    get tagHistorythis() {
      return [...this._tagsHistory,];
  }


    searchTag(tag: string):void{

        if (tag.length === 0) return;

        const params = new HttpParams()
        .set('api_key', this.apikey)
        .set('limit', '10')
        .set('q', tag)

        this.http.get<SearchResponse>(`${ this.serviceUrl }/v1/volumes`, {params})
        .subscribe(resp=> {

          this.bookList = resp.items;



        })
    }



  }
