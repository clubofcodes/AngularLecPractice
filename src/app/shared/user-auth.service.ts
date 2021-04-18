import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import Swal from 'sweetalert2';
import { allUser } from './alluserInterface';

@Injectable({
  providedIn: 'root'
})
export class UserAuthService {

  url = "https://all-students-api.herokuapp.com/api/";

  constructor(private _http: HttpClient, private _route: Router) { }

  //registration method
  public regUser(user:allUser): Observable<any>{
    return this._http.post<any>(this.url+"signup",user);
  }

  //login method
  public userLogin(user:allUser){
    return this._http.post<any>(this.url+"login",user)
    .subscribe((res:any)=>{
      console.log(res);

      const Toast = Swal.mixin({
        toast: true,
        position: 'top',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
      });

      if(res.invalidUser!==undefined) Toast.fire({icon:'warning',title:res.invalidUser});
      else if(res.token!==null){
        localStorage.setItem('access-token', res.token);
        this._route.navigate(['/students']);
        Toast.fire({icon: 'success',title: 'Loged In successfully!'});
      }
    });
  }

  isLoggedIn():boolean{
    let authToken = localStorage.getItem('access-token');
    return (authToken) !==null ? true : false;
  }

  //logout method
  logout(){
    if(localStorage.removeItem('access-token')==null){
      this._route.navigate(['/login']);
    }
  }

}
