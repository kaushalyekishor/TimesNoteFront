import { Component, OnInit, resolveForwardRef } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms'
import {HttpRequestService} from '../../services/user.service'
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Router } from '@angular/router';
import { SocialAuthService } from "angularx-social-login";
import { FacebookLoginProvider, GoogleLoginProvider} from "angularx-social-login";
import { SocialUser } from "angularx-social-login";
 

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  user: SocialUser;
  loggedIn: boolean;
  res
  constructor(private fb:FormBuilder, private service:HttpRequestService, private router:Router, private authService:SocialAuthService) { }

  signInWithGoogle(): void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }
  signInWithFacebook(): void {
    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID);
  }
 
 
  ngOnInit(): void {
    this.loginForm=this.fb.group({
      email:['', Validators.required],
      password:['', Validators.required]
    })

    this.authService.authState.subscribe((user) => {
      this.user = user;
      this.loggedIn = (user != null);
      console.log(user); 
    });
  }
    get email(){
      return this.loginForm.get('email')
     }
     
     get password(){
      return this.loginForm.get('password')
     }
     
     login(){
      // console.log([this.loginForm]);
      this.service.login(this.loginForm.value).subscribe(res => {
       //console.log(res);
       this.res=res 
       localStorage.setItem('loginToken',this.res.token)
       this.router.navigate(['dashboard'])
       })
      }
}
