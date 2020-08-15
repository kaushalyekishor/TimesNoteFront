import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent} from './Components/login/login.component'
import { RegistrationComponent } from './Components/registration/registration.component'
import { UserVerificationComponent } from './Components/user-verification/user-verification.component'

const routes: Routes = [
    {path:'',redirectTo:'login', pathMatch:'full'},
    {path:'login',component: LoginComponent},
    {path:'register',component: RegistrationComponent},
    {path:'verify/:token',component: UserVerificationComponent}
    ];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
    })
    export class AppRoutingModule { }