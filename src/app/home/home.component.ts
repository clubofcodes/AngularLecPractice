import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  h_variable = "String by variable";
  h_array = ['R', 7, 'A', 'H', 'U', 'L', '.', 'J', 5];
  h_object = {
    name:"Angular",
    sem:6,
    use:"Single Page Web Application"
  };
  h_func(){
    return 35+75;
  };

  constructor() { }

  ngOnInit(): void {}

//sharing data between components
  // msg = "";
  // funName(msgs){
    //   this.msg = msgs;
    //   console.log(this.msg);
  // }
//sharing data between components

}
