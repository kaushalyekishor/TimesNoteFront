import {Injectable} from '@angular/core'
import {HttpClient} from "@angular/common/http"

@Injectable({
    providedIn:'root'
})

export class HttpRequestService{
    constructor(private _http:HttpClient){}
        add(user:any){
            return this._http.post('http://localhost:5050/user/signUp', user);
        }

        verify(user:any){
            return this._http.post('http://localhost:5050/user/verify', user);
        }

        login(user:any){
            return this._http.post('http://localhost:5050/user/login', user); 
          }

        forgetPassword(user:any){
            return this._http.post('http://localhost:5050/user/forgetPassword', user); 
          }  

        updatePassword(user:any){
            return this._http.post('http://localhost:5050/user/updatePassword', user); 
          }    
    } 