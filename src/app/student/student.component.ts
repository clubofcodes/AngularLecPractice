import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ConfirmDialogService } from '../confirm-dialog/confirm-dialog.service';
import { LocalStorageService } from '../shared/local-storage.service';
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
  fullName: string = "";
  en_No: string = "";
  email: string = "";
  password: string = "";
  field: string = "";
  cellNo: string = "";
  dob: string = "";
  gender: string = "Male";

  keyName; //to store keyvalue from local storage.
  res; //result for storing object-data fetched by keyvalue(i.e. keyName)
  insertData: any = [];

  dataSub: string = "Insert";
  isEditable: boolean = false;
  changeText: boolean;

  constructor(private _localStorage: LocalStorageService, private modalService: NgbModal, private router: Router, private confirmDialogService: ConfirmDialogService) {
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
    for (let i = 0; i < this._localStorage.storageLength(); i++) {
      this.keyName = this._localStorage.getKeyName(i);
      this.res = this._localStorage.getItem(this.keyName);
      this.insertData[i] = JSON.parse(this.res);
    }
  }

  open(content) {
    this.fullName = "";
    this.email = "";
    this.password = "",
    this.en_No = "";
    this.isEditable = false;
    this.dob = "";
    this.field = "";
    this.cellNo = "";
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
    name: this.fullName,
    email: this.email,
    password: this.password,
    gender: this.gender,
    en_No: this.en_No,
    cellNo: this.cellNo,
    dob: this.dob,
    field: this.field,
    img_url: this.img_url,
  };

  saveData(userForm) {
    this.stud.name = userForm.value.fullName;
    this.stud.en_No = userForm.value.en_No;
    this.stud.email = userForm.value.email;
    this.stud.password = userForm.value.password;
    this.stud.field = userForm.value.field;
    this.stud.cellNo = userForm.value.cellNo;
    this.stud.dob = userForm.value.dob;
    this.stud.gender = userForm.value.gen;

    if (this.fullName == "" || this.en_No == "" || this.email == "" || this.password == "" || this.field == "" || this.cellNo == "" || this.dob == "") {
      alert("Error: All fields are mandatory.");
    } else {
      this._localStorage.setItem(userForm.value.en_No, JSON.stringify(this.stud));
      if(this.dataSub=="Insert"){alert("Inserted successfully..!!");}else{alert("Updated successfully..!!");}

      this.router.navigate(['/students']);
      this.modalService.dismissAll();
    }
  }

  setModalData(i: number, content) {
    this.modalService.open(content, { centered: true, size: 'md' });
    this.dataSub = "Update";
    this.fullName = this.insertData[i].name;
    this.isEditable = true;
    this.en_No = this.insertData[i].en_No;
    this.email = this.insertData[i].email;
    this.password = this.insertData[i].password,
    this.dob = this.insertData[i].dob;
    this.field = this.insertData[i].field;
    this.cellNo = this.insertData[i].cellNo;
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
    alert("Do you want to delete " + this.insertData[i].name + " data?");
    this.en_No = this.insertData[i].en_No;
    this._localStorage.deleteItem(this.en_No);
    this.router.navigate(['/students']);
    // window.location.reload();
  }

}
