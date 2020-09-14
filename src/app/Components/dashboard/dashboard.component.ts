import { Component, OnInit } from '@angular/core';
import * as jwt_decode from  'jwt-decode'
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor() { 
    let token = localStorage.getItem('loginToken')
    let decodedUserDetails = jwt_decode(token)
    let stoken = localStorage.getItem('sociallogin');
    let sUser = jwt_decode(stoken) 
    console.log(sUser);
    
  }

  ngOnInit(): void {
  }

}
