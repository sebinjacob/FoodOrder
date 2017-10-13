import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  error:string;

  constructor(private router: Router) { }

  ngOnInit() {
  }
  login(logData)
  {
    console.log(logData.value);
    localStorage.setItem("log",JSON.stringify(logData.value));
    var c_log=logData.value
     
     var db_log=JSON.parse(localStorage.getItem("log"));
     
     if(db_log.uname==c_log.uname && db_log.pass==c_log.pass)
     {
       console.log(" Login sucess");
       this.router.navigate(['/appr']);
     }
     else
     { 
       //alert("Incorrect User Name And Password");
       this.error="Incorrect User Name And Password";
     }

  }
}
