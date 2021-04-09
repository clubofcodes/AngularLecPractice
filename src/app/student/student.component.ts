import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { LocalStorageService } from '../shared/local-storage.service';
import { NodejsApiService } from '../shared/nodejs-api.service';
import Swal from 'sweetalert2'
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
  p=1; //starting of page.

  // student variables
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
  // student variables

  keyName; //to store keyvalue from local storage.
  res; //result for storing object-data fetched by keyvalue(i.e. keyName)
  insertData: any = []; //array to store fetched data to display using forLoop.

  dataSub: string = "Insert"; //for changing btn text.
  isEditable: boolean = false; //ngIf directives condition for editing data when editBtn clicked.
  changeText: boolean; //ngIf directives condition for mouse-over/change effect.

  constructor(private _localStorage: LocalStorageService, private nodejsApiService: NodejsApiService, private modalService: NgbModal, private router: Router) {
    this.changeText = false; //for over effect on Student List text

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
    //R->read operation reads data using nodejsApi
    this.nodejsApiService.getStudent().subscribe((readData)=>{
      this.insertData = readData;
      //adding isEditable property/field runtime.
      this.insertData.forEach(element => {
        element['isEditable'] = false;
      });
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

  //sorting in reverse according to emailId.
  key = 'username';
  reverse:boolean = false;
  sort(key){
    this.key = key;
    this.reverse = !this.reverse;
  }

  //C->Create operation insert's data using nodejsApi
  saveData(userForm) {
    //common toast/alert for required & inserting data.
    const Toast = Swal.mixin({
      toast: true,
      position: 'top',
      showConfirmButton: false,
      timer: 2000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
      }
    });

    if (this.fullname == "" || this.uid == "" || this.username == "" || this.password == "" || this.department == "" || this.cellno == "" || this.dob == "") {
      Toast.fire({icon:'warning',title:'All fields are mandatory!!'});
    } else {
      //insertng data into online db using nodejs
      this.nodejsApiService.addStudent(userForm.value).subscribe(
        (res)=>{
          console.log("post ",res);
          this.router.navigate(['/students']); //refreshing the component
          Toast.fire({icon: 'success',title: 'Inserted successfully!'});
      });

      this.modalService.dismissAll(); //for closing insert modal after succefully data inserted.
    }
  }

  //edit & cancel button click events.
  editBtn(editData) {editData.isEditable = true;}
  cancelBtn(back) {
    back.isEditable = false;
    this.ngOnInit(); //refreshing the component
  }

  //U->Update operation update's data using nodejsApi
  update(updateData){
    this.nodejsApiService.updateStudent(updateData).subscribe(
      (data)=>{
        console.log(data);
        updateData.isEditable = false;
        Swal.fire('Thank you...', 'Data updated succesfully!', 'success');
    });
  }

  //D->Delete operation delete's data using nodejsApi
  delete(deleteData) {
    Swal.fire({
      title: 'Are you sure?',
      text: 'You won\'t be able to recover ' + deleteData.fullname + "'s data?",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, keep it'
    }).then((result) => {
      if (result.value) {
        this.nodejsApiService.deleteStudent(deleteData).subscribe();
        Swal.fire('Deleted', 'Your record has been deleted.', 'success');
      } else {
        Swal.fire('Cancelled', 'Your record is safe :)', 'info');
      }
      if(Swal.close){
        this.router.navigate(['/students']);
      }
    })
    // window.location.reload();
  }

}
