import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { liveapiI } from '../data-from-api/liveAPIinterface';

@Injectable({
  providedIn: 'root'
})
export class DataFromApiService {

  url = "https://api.github.com/users/hadley/repos";
  
  constructor(private _http:HttpClient) { }

  getData(){
    return this._http.get<liveapiI[]>(this.url);
  }
}
