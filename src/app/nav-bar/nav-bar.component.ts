import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from '../shared/local-storage.service';
import { UserAuthService } from '../shared/user-auth.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  searchVal:string="";
  res;

  constructor(private _localStorage: LocalStorageService, public _userAuthService: UserAuthService) { }

  ngOnInit(): void {
  }

  show(value) {
    if (value == "") {
      alert("Enter Your First Name To Search.");
    } else if (this._localStorage.getItem(this.searchVal) == null) {
      alert("Invalid details..!!");
    } else {
      this.res = this._localStorage.getItem(this.searchVal);
      alert("You searched for: " + this.res);
      console.log("Keyup and enter as " + value);
      this.searchVal = "";
    }
  }

  logout(){
    this._userAuthService.logout();
  }

}
