import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms'
import {HttpRequestService} from '../../services/user.service'
import { Router} from '@angular/router'
import { from } from 'rxjs';

@Component({
  selector: 'app-update-password',
  templateUrl: './update-password.component.html',
  styleUrls: ['./update-password.component.css']
})
export class UpdatePasswordComponent implements OnInit {
  updatePasswordForm: FormGroup;
  constructor(private fb:FormBuilder, private service:HttpRequestService, private router: Router) { }

  ngOnInit(): void {
    this.updatePasswordForm=this.fb.group({
      password:['', Validators.required],
      confirmPassword:['', Validators.required],
    })
  }

  get password(){
    return this.updatePasswordForm.get('password')
  }
/*  
  get confirmPassword(){
   return this.updatePasswordForm.get('email')
  }

  updatePassword(){
    this.service.add(this.updatePasswordForm.value).subscribe(res => {
      console.log(res); 
    })
    } */

    updatePassword() {
      let userDetail = {
        token: document.URL.split('updatePassword/')[1],
        password: this.updatePasswordForm.value.password
      }
      this.service.updatePassword(
        userDetail
      ).subscribe(res => {
        this.router.navigate(['login']);
        console.log(res);
      }, err => {
        console.log(err);
        alert(err.error.msg);
      });
    }
}
