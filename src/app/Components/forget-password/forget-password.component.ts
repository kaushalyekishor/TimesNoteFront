import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms'

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.css']
})
export class ForgetPasswordComponent implements OnInit {
  forgetPasswordForm: FormGroup;
  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
    this.forgetPasswordForm=this.fb.group({
      email:['', Validators.required]
    })
  }
  get email(){
    return this.forgetPasswordForm.get('email')
   }

   forgetPassword(){
    console.log([this.forgetPasswordForm]);
    }
}
