import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { iStudent } from '../student/studentInterface';

@Injectable({
  providedIn: 'root'
})
export class NodejsApiService {

  url = "https://all-students-api.herokuapp.com/api/";
  constructor(private _http: HttpClient) { }


  httpOptions = {
    headers: new HttpHeaders({'Content-Type':'application/json'})
  };

  public getStudent():Observable<any>{
    return this._http.get(this.url+"students",this.httpOptions);
    // return this._http.get(this.url);
  }
  getAccessToken(){
    return localStorage.getItem('access-token');
  }

  public getStudentByUID(data){
    return this._http.get(this.url+"students"+data.uid);
  }

  public addStudent(data:iStudent): Observable<iStudent>{
    return this._http.post<iStudent>(this.url+"students",data);
  }

  public updateStudent(data:iStudent): Observable<iStudent>{
    return this._http.patch<iStudent>(this.url+"students"+data._id,data);
  }

  public deleteStudent(data){
    return this._http.delete(this.url+"students"+data._id);
  }
}
