import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
    this.loginForm=this.fb.group({
      email:['', Validators.required],
      password:['', Validators.required]
    })
  }
    get email(){
      return this.loginForm.get('email')
     }
     
     get password(){
      return this.loginForm.get('password')
     }
     
     login(){
       console.log([this.loginForm]);
       }
}
