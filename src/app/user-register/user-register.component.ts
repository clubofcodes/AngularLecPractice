import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { UserAuthService } from '../shared/user-auth.service';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit {

  //variable name of the Form in reg form tag.
  registerForm:FormGroup;
  field:Boolean;

  constructor(private _userAuthService: UserAuthService, private _route: Router) {
    this.registerForm = new FormGroup({
      // user registration form variables
      fullname: new FormControl(null),
      email: new FormControl(null),
      password: new FormControl(null),
      confpassword: new FormControl(null)
    });
  }

  ngOnInit(): void {
    if(this._userAuthService.isLoggedIn()===true){
      this._route.navigate(['/students']);
    }
  }


  registerUser(){
    //to get all form field or any particular.
    console.log(this.registerForm.value);
    console.log(this.registerForm.get('email').value);


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

    this.field = this.registerForm.get('fullname').value===null || this.registerForm.get('email').value===null || this.registerForm.get('password').value===null || this.registerForm.get('confpassword').value===null;
    if(this.field) Toast.fire({icon:'warning',title:'All fields are mandatory!!'});
    else{
      this._userAuthService.regUser(this.registerForm.value).subscribe(res=>{
        console.log(res);
        this.registerForm.reset();
        this._route.navigate(['login']);
      });
      Toast.fire({icon: 'success',title: 'Registered successfully!'});
    }
  }

}
