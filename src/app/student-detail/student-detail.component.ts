import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { iResult } from '../result/resInterface';
import { iStudent } from '../student/studentInterface';

@Component({
  selector: 'app-student-detail',
  templateUrl: './student-detail.component.html',
  styleUrls: ['./student-detail.component.css']
})
export class StudentDetailComponent implements OnInit {

  url="/assets/marks.png";

  student: any=null;
  id:any;

  students:iStudent[]=[
    {name: "Rahul Jagetia",
    email: "rjagetiya780@rku.ac.in",
    en_No: "18SOEIT11009",
    dob: "01-05-1999",
    field: "Information Technology",
    img_url:"../../assets/male.jpg"},

    {name: "Kavya Patel",
    email: "kpatel223@rku.ac.in",
    en_No: "17SOEIT11013",
    dob: "13-02-2000",
    field: "Information Technology",
    img_url:"../../assets/female.jpg"},

    {name: "Pranav Kakadiya",
    email: "pkakadiya274@rku.ac.in",
    en_No: "18SOEIT11012",
    dob: "07-04-2000",
    field: "Information Technology",
    img_url:"../../assets/male.jpg"},

    {name: "Trisha Chaudary",
    email: "tchaudary365@rku.ac.in",
    en_No: "17SOEIT11023",
    dob: "23-07-2000",
    field: "Information Technology",
    img_url:"/assets/female.jpg"},

    {name: "Bhumik Kalola",
    email: "bkalola264@rku.ac.in",
    en_No: "18SOEIT11013",
    dob: "09-09-2000",
    field: "Information Technology",
    img_url:"/assets/male.jpg"},

    {name: "Chitrangada Singh",
    email: "csingh143@rku.ac.in",
    en_No: "19SOEIT11007",
    dob: "19-07-2000",
    field: "Information Technology",
    img_url:"/assets/female.jpg"},

    {name: "Deepak Shukla",
    email: "dshukla293@rku.ac.in",
    en_No: "18SOEIT11006",
    dob: "08-06-2001",
    field: "Information Technology",
    img_url:"/assets/male.jpg"},

    {name: "Dharmil Dhameliya",
    email: "ddhameliya765@rku.ac.in",
    en_No: "18SOEIT11008",
    dob: "14-01-2000",
    field: "Information Technology",
    img_url:"/assets/male.jpg"}

  ];
  results:iResult[]=[
    {allres:[{sem: "First Semester", sgpa:8.75, cgpa:8.75},{sem: "Second Semester", sgpa:9.0, cgpa:8.88},{sem: "Third Semester", sgpa:7.70, cgpa:8.71},{sem: "Fourth Semester", sgpa:8.76, cgpa:8.19},{sem: "Fifth Semester", sgpa:9.27, cgpa:8.71 },{sem: "Sixth Semester", sgpa:0, cgpa:0},{sem: "Seventh Semester", sgpa:0, cgpa:0},{sem: "Eight Semester", sgpa:0, cgpa:0}]},
    {allres:[{sem: "First Semester", sgpa:8.55, cgpa:8.55},{sem: "Second Semester", sgpa:8.75, cgpa:8.85},{sem: "Third Semester", sgpa:7.0, cgpa:8.2},{sem: "Fourth Semester", sgpa:7.1, cgpa:8.1}]},
    {allres:[{sem: "First Semester", sgpa:8.8, cgpa:8.8},{sem: "Second Semester", sgpa:8.55, cgpa:8.68},{sem: "Third Semester", sgpa:8.9, cgpa:8.75},{sem: "Fourth Semester", sgpa:9.22, cgpa:8.99}]},
    {allres:[{sem: "First Semester", sgpa:6.75, cgpa:6.75},{sem: "Second Semester", sgpa:6.95, cgpa:7.0},{sem: "Third Semester", sgpa:7.35, cgpa:7.6},{sem: "Fourth Semester", sgpa:7.89, cgpa:8.0}]},
    {allres:[{sem: "First Semester", sgpa:8.1, cgpa:8.1},{sem: "Second Semester", sgpa:8.75, cgpa:8.78},{sem: "Third Semester", sgpa:8.45, cgpa:8.81},{sem: "Fourth Semester", sgpa:8.35, cgpa:8.9}]},
    {allres:[{sem: "First Semester", sgpa:6.25, cgpa:6.25},{sem: "Second Semester", sgpa:6.75, cgpa:6.75},{sem: "Third Semester", sgpa:7.21, cgpa:7.76},{sem: "Fourth Semester", sgpa:7.75, cgpa:7.95}]},
    {allres:[{sem: "First Semester", sgpa:8.75, cgpa:8.75},{sem: "Second Semester", sgpa:9.75, cgpa:9.23},{sem: "Third Semester", sgpa:9.27, cgpa:9.30},{sem: "Fourth Semester", sgpa:8.48, cgpa:9.65}]},
    {allres:[{sem: "First Semester", sgpa:9.15, cgpa:9.15},{sem: "Second Semester", sgpa:8.65, cgpa:8.9},{sem: "Third Semester", sgpa:7.75, cgpa:8.68},{sem: "Fourth Semester", sgpa:8.35, cgpa:8.67}]}
  ];

  constructor(private _activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this._activatedRoute.params.subscribe(param=>{
      this.id=param['id'];
      this.student = this.students[param['id']]
    })
  }

  show(alertMsg){
    alert("Edit event is "+alertMsg);
  }

}
