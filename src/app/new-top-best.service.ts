import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable()

export class NewTopBestService {

  constructor(private _http: HttpClient) { }

  public getAll(): Observable<number[]> {
    return this._http.get<number[]>('https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty')
  }

  public getItem(id: number): Observable<IStory>{    
    const url = `https://hacker-news.firebaseio.com/v0/item/${id}.json`;
    return this._http.get<IStory>(url);    
  }
  
}

export interface IStory{
  by: string;
  descendants: number;
  id: number;
  kids: number[];
  score : number;
  time : number;
  title : string;
  type : "story";
  url : string;
}