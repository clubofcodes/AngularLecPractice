import { Component, Input, OnInit } from '@angular/core';
import { iResult } from './resInterface';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})

export class ResultComponent implements OnInit {

  url="/assets/marks.png";

  results:iResult[]=[
    {allres:[{sem: "First Semester", sgpa:8.75, cgpa:8.75},{sem: "Second Semester", sgpa:9.0, cgpa:8.88},{sem: "Third Semester", sgpa:7.70, cgpa:8.71},{sem: "Fourth Semester", sgpa:8.76, cgpa:8.19},{sem: "Fifth Semester", sgpa:9.27, cgpa:8.71 },{sem: "Sixth Semester", sgpa:0, cgpa:0},{sem: "Seventh Semester", sgpa:0, cgpa:0},{sem: "Eight Semester", sgpa:0, cgpa:0}]},
    {allres:[{sem: "First Semester", sgpa:8.55, cgpa:8.55},{sem: "Second Semester", sgpa:8.75, cgpa:8.85},{sem: "Third Semester", sgpa:7.0, cgpa:8.2},{sem: "Fourth Semester", sgpa:7.1, cgpa:8.1}]},
    {allres:[{sem: "First Semester", sgpa:8.8, cgpa:8.8},{sem: "Second Semester", sgpa:8.55, cgpa:8.68},{sem: "Third Semester", sgpa:8.9, cgpa:8.75},{sem: "Fourth Semester", sgpa:9.22, cgpa:8.99}]},
    {allres:[{sem: "First Semester", sgpa:6.75, cgpa:6.75},{sem: "Second Semester", sgpa:6.95, cgpa:7.0},{sem: "Third Semester", sgpa:7.35, cgpa:7.6},{sem: "Fourth Semester", sgpa:7.89, cgpa:8.0}]},
    {allres:[{sem: "First Semester", sgpa:8.1, cgpa:8.1},{sem: "Second Semester", sgpa:8.75, cgpa:8.78},{sem: "Third Semester", sgpa:8.45, cgpa:8.81},{sem: "Fourth Semester", sgpa:8.35, cgpa:8.9}]},
    {allres:[{sem: "First Semester", sgpa:6.25, cgpa:6.25},{sem: "Second Semester", sgpa:6.75, cgpa:6.75},{sem: "Third Semester", sgpa:7.21, cgpa:7.76},{sem: "Fourth Semester", sgpa:7.75, cgpa:7.95}]},
    {allres:[{sem: "First Semester", sgpa:8.75, cgpa:8.75},{sem: "Second Semester", sgpa:9.75, cgpa:9.23},{sem: "Third Semester", sgpa:9.27, cgpa:9.30},{sem: "Fourth Semester", sgpa:8.48, cgpa:9.65}]},
    {allres:[{sem: "First Semester", sgpa:9.15, cgpa:9.15},{sem: "Second Semester", sgpa:8.65, cgpa:8.9},{sem: "Third Semester", sgpa:7.75, cgpa:8.68},{sem: "Fourth Semester", sgpa:8.35, cgpa:8.67}]},
  ]

  constructor() { }

  ngOnInit(): void {

  }

  show(name){
    if(name==""){
      alert("Error: Username is required");
    }else{
      alert("Your username: "+name);
    }
  }

  editshow(alertMsg){
    alert("Edit event is "+alertMsg);
  }

}
