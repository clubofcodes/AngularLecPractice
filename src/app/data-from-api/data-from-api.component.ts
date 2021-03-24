import { Component, OnInit } from '@angular/core';
import { DataFromApiService } from '../shared/data-from-api.service';

@Component({
  selector: 'app-data-from-api',
  templateUrl: './data-from-api.component.html',
  styleUrls: ['./data-from-api.component.css']
})
export class DataFromApiComponent implements OnInit {

  liveapiI = [];
  p=1;
  name="";

  constructor(private _datafromapiservice: DataFromApiService) { }

  ngOnInit(): void {
    this._datafromapiservice.getData().subscribe((response)=>{
      this.liveapiI = response;
      // console.log(this.liveapiI);
    });
  }

  searchValue() {
    if (this.name != "") {
      this.liveapiI = this.liveapiI.filter(res => {
        return res.name.toLocaleLowerCase().match(this.name);
      });
    } else {
      this.ngOnInit();
    }
  }

  key = 'name';
  reverse:boolean = false;
  sort(key){
    this.key = key;
    this.reverse = !this.reverse;
  }
}
