import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-approval-type',
  templateUrl: './approval-type.component.html',
  styleUrls: ['./approval-type.component.css']
})
export class ApprovalTypeComponent implements OnInit {
 app_type:any;
  constructor() { }

  ngOnInit() {
  }
  setApproval(selected)
  {
   
    let json_app={ "type":selected};
 
    localStorage.setItem('App_type', JSON.stringify(json_app));
    
    this.getApproval();
     
    }
    getApproval()
    {
       
      this.app_type=JSON.parse(localStorage.getItem('App_type'));
    
       this.app_type =  Array.of( this.app_type);
     
    
    }

}
