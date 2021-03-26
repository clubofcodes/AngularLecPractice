import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ConfirmDialogService } from '../confirm-dialog/confirm-dialog.service';
import { LocalStorageService } from '../shared/local-storage.service';
import { NodejsApiService } from '../shared/nodejs-api.service';
import { iStudent } from './studentInterface';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  //sharing data between components
  // @Input() string;
  // @Output() eventName = new EventEmitter<any>();
  //sharing data between components

  mySubscription: any;

  img_url = "../../assets/male.jpg"
  female_img = "../../assets/female.jpg"
  fullname: string = "";
  uid: string = "";
  username: string = "";
  password: string = "";
  department: string = "";
  cellno: string = "";
  dob: string = "";
  gender: string = "Male";

  keyName; //to store keyvalue from local storage.
  res; //result for storing object-data fetched by keyvalue(i.e. keyName)
  insertData: any = [];

  dataSub: string = "Insert";
  isEditable: boolean = false;
  changeText: boolean;

  constructor(private _localStorage: LocalStorageService, private nodejsApiService: NodejsApiService, private modalService: NgbModal, private router: Router, private confirmDialogService: ConfirmDialogService) {
    this.changeText = false;

    this.router.routeReuseStrategy.shouldReuseRoute = function () {
      return false;
    };
    this.mySubscription = this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        // Trick the Router into believing it's last link wasn't previously loaded
        this.router.navigated = false;
      }
    });
  }

  ngOnDestroy(): void {
    if (this.mySubscription) {
      this.mySubscription.unsubscribe();
    }
  }

  ngOnInit(): void {
    // for (let i = 0; i < this._localStorage.storageLength(); i++) {
    //   this.keyName = this._localStorage.getKeyName(i);
    //   this.res = this._localStorage.getItem(this.keyName);
    //   this.insertData[i] = JSON.parse(this.res);
    // }
    this.nodejsApiService.getStudent().subscribe((response)=>{
      this.insertData = response;
    });
  }

  open(content) {
    this.fullname = "";
    this.username = "";
    this.password = "",
    this.uid = "";
    this.isEditable = false;
    this.dob = "";
    this.department = "";
    this.cellno = "";
    this.gender = "Male";
    this.dataSub = "Insert";
    this.modalService.open(content, { centered: true, size: 'md' });
  }

  show(alertMsg) {
    alert("Edit event is " + alertMsg);
    // this.eventName.emit("Edit event is "+alertMsg); //sharing data between components
  }

  mouseEvent(hover) {
    this.changeText = hover;
    return this.changeText;
  }

  stud: iStudent = {
    fullname: this.fullname,
    uid: this.uid,
    username: this.username,
    password: this.password,
    department: this.department,
    cellno: this.cellno,
    dob: this.dob,
    gender: this.gender,
  };

  saveData(userForm) {
    // this.stud.fullname = userForm.value.fullname;
    // this.stud.uid = userForm.value.uid;
    // this.stud.username = userForm.value.username;
    // this.stud.password = userForm.value.password;
    // this.stud.department = userForm.value.department;
    // this.stud.cellno = userForm.value.cellno;
    // this.stud.dob = userForm.value.dob;
    // this.stud.gender = userForm.value.gender;

    if (this.fullname == "" || this.uid == "" || this.username == "" || this.password == "" || this.department == "" || this.cellno == "" || this.dob == "") {
      alert("Error: All fields are mandatory.");
    } else {
      // this._localStorage.setItem(userForm.value.uid, JSON.stringify(this.stud));
      this.nodejsApiService.addStudent(userForm.value).subscribe(
        (res)=>{
          console.log("post ",res);
      });
      if(this.dataSub=="Insert"){alert("Inserted successfully..!!");}else{alert("Updated successfully..!!");}
      this.router.navigate(['/students']);
      this.modalService.dismissAll();
    }
  }

  setModalData(i: number, content) {
    this.modalService.open(content, { centered: true, size: 'md' });
    this.dataSub = "Update";
    this.fullname = this.insertData[i].fullname;
    this.isEditable = true;
    this.uid = this.insertData[i].uid;
    this.username = this.insertData[i].username;
    this.password = this.insertData[i].password,
    this.department = this.insertData[i].department;
    this.cellno = this.insertData[i].cellno;
    this.dob = this.insertData[i].dob;
    this.gender = this.insertData[i].gender;
  }

  deleteData(i: number) {
    // var name = this.insertData[i]
    // this.confirmDialogService.confirmThis("Are you sure to delete?", function () {
    //   alert("Yes clicked");
    //   // alert("Do you want to delete " + this.insertData[i].name + " data?");
    // }, function () {
    //   alert("No clicked");
    // })
    alert("Do you want to delete " + this.insertData[i].fullname + " data?");
    this.uid = this.insertData[i].uid;
    this._localStorage.deleteItem(this.uid);
    this.router.navigate(['/students']);
    // window.location.reload();
  }

}
