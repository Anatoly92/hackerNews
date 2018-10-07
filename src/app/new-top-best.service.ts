import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable()

export class NewTopBestService {

  constructor(private _http: HttpClient) { }

  public getAll(){
    return this._http.get('https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty')
  }
}
