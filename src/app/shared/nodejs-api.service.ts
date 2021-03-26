import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { iStudent } from '../student/studentInterface';

@Injectable({
  providedIn: 'root'
})
export class NodejsApiService {

  url = "https://all-students-api.herokuapp.com/api/users/";
  constructor(private _http: HttpClient) { }

  public getStudent(){
    return this._http.get(this.url);
  }

  public getStudentByUID(uid){
    return this._http.get(this.url+uid);
  }

  public addStudent(data:iStudent): Observable<iStudent>{
    return this._http.post<iStudent>(this.url,data);
  }
}
