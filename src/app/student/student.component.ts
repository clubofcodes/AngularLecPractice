import { Component, OnInit } from '@angular/core';
import { iStudent } from './studentInterface';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  changeText: boolean;

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
    dob: "08-09-2000",
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

  constructor() {
    this.changeText = false;
  }

  ngOnInit(): void {
  }

  show(alertMsg){
    alert("Edit event is "+alertMsg);
  }

  mouseEvent(hover){
    this.changeText=hover;
    return this.changeText;
  }

}
