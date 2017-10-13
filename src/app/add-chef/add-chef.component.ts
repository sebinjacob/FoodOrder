import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-chef',
  templateUrl: './add-chef.component.html',
  styleUrls: ['./add-chef.component.css']
})
export class AddChefComponent implements OnInit {

 user:any[];
 

  constructor() { }

  ngOnInit() {
  }

  addChef(formData)
  {
   console.log(formData.value);
   localStorage.setItem('chef', JSON.stringify(formData.value));
  this.getChef();
   
  }
  getChef()
  {
     
   this.user=JSON.parse(localStorage.getItem('chef'));
  
    this.user =  Array.of( this.user);
   
  
  }
}
