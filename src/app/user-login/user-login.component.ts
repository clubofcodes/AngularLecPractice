import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { UserAuthService } from '../shared/user-auth.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
  pwdPattern = "/^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,}$/";
  //variable name of the Form in login form tag.
  loginForm:FormGroup;

  constructor(private _userAuthService: UserAuthService, private _route: Router) {
    this.loginForm = new FormGroup({
      // user login form variables
      email: new FormControl(null),
      password: new FormControl(null),
    });

  }

  ngOnInit(): void {
    if(this._userAuthService.isLoggedIn()===true){
      this._route.navigate(['/students']);
    }
  }

  loginUser(){
    console.log(this.loginForm.value);

    //common toast/alert for login or invalid user.
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

    if(this.loginForm.get('email').value===null || this.loginForm.get('password').value===null) Toast.fire({icon:'warning',title:'Wrong credentials or invalid User'});
    else this._userAuthService.userLogin(this.loginForm.value);

  }

}
