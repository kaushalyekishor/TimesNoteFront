import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent} from './Components/login/login.component'
import { RegistrationComponent } from './Components/registration/registration.component'
import { UserVerificationComponent } from './Components/user-verification/user-verification.component'
import {DashboardComponent} from './Components/dashboard/dashboard.component'
import {ForgetPasswordComponent} from './Components/forget-password/forget-password.component'
import { UpdatePasswordComponent } from './Components/update-password/update-password.component';
import {NotesComponent} from './Components/notes/notes.component';

const routes: Routes = [
    {path:'',redirectTo:'login', pathMatch:'full'},
    {path:'login',component: LoginComponent},
    {path:'register',component: RegistrationComponent},
    {path:'verify/:token',component: UserVerificationComponent},
    {path:'dashboard',component: DashboardComponent},
    {path:'forgetPassword',component: ForgetPasswordComponent},
    {path:'updatePassword/:token',component: UpdatePasswordComponent},
    { path: 'confirmation/:id', component: UserVerificationComponent },
    { path: 'dashboard', component: DashboardComponent, 
    children:[
    { path: 'note', component: NotesComponent },
    ]},
    ]
    

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
    })
    export class AppRoutingModule { }