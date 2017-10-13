import { Component, OnInit } from '@angular/core';
import {Http} from '@angular/http';

@Component({
  selector: 'app-add-menu',
  templateUrl: './add-menu.component.html',
  styleUrls: ['./add-menu.component.css']
})
export class AddMenuComponent implements OnInit {
 data:any[];
  constructor(private http:Http) { }

  ngOnInit() {
  }

  addMenu(fData)
  {
    console.log(fData.value);
    // localStorage.setItem("menu",JSON.stringify(fData.value));
    // this.tost();
    this.http.post("http://localhost:8080/FoodOrder/Menu",JSON.stringify(fData.value))
     .subscribe(response=>{ console.log(response.json());})

  }
  tost()
  {
    this.data=JSON.parse(localStorage.getItem("menu"));
    this.data=Array.of(this.data);
    
  }

}
