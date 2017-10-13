import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-approve-list',
  templateUrl: './approve-list.component.html',
  styleUrls: ['./approve-list.component.css']
})
export class ApproveListComponent implements OnInit {
  action_list :any[];
  constructor() { }

  ngOnInit() {
  }
  approveAction(action)
  {
    let action_list={"action":action};
      localStorage.setItem("approvalList",JSON.stringify(action_list));
      this.tost();
  }
  tost(){
    this.action_list =JSON.parse(localStorage.getItem("approvalList"));
     this.action_list= Array.of(this.action_list);
  }

}
