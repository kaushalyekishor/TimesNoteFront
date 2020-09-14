import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms'
import{CommonModule} from '@angular/common'
import { AppComponent } from './app.component';
import { RegistrationComponent } from './Components/registration/registration.component';
import { LoginComponent } from './Components/login/login.component';
import { ForgetPasswordComponent } from './Components/forget-password/forget-password.component';
import { UserVerificationComponent } from './Components/user-verification/user-verification.component';
import {HttpClient, HttpClientModule} from '@angular/common/http'
import { from } from 'rxjs';
import { AppRoutingModule} from './app-routing.module';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { UpdatePasswordComponent } from './Components/update-password/update-password.component';
import { SocialLoginModule, SocialAuthServiceConfig } from 'angularx-social-login';
import { GoogleLoginProvider,FacebookLoginProvider} from 'angularx-social-login';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { SidenavbarComponent } from './Components/sidenavbar/sidenavbar.component';
import { SideNavTogglerComponent } from './Components/side-nav-toggler/side-nav-toggler.component';
import { NotesComponent } from './Components/notes/notes.component';
import { CreateNoteComponent } from './Components/create-note/create-note.component';
import { DisplayNoteComponent } from './Components/display-note/display-note.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    LoginComponent,
    ForgetPasswordComponent,
    UserVerificationComponent,
    DashboardComponent,
    ForgetPasswordComponent,
    UpdatePasswordComponent,
    NavbarComponent,
    SidenavbarComponent,
    SideNavTogglerComponent,
    NotesComponent,
    CreateNoteComponent,
    DisplayNoteComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    SocialLoginModule
  ],
  providers: [HttpClient,
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(
              "912399049440-8tl0avhb5e05v1db9vkt1g4vp6k9i20a.apps.googleusercontent.com"
            ),
          },
          {
            id: FacebookLoginProvider.PROVIDER_ID,
            provider: new FacebookLoginProvider('599051860729374'),
          },
          /*
          {
            id: LinkdinLoginProvider.PROVIDER_ID,
            provider: new LinkdinLoginProvider('599051860729374'),
          },*/
          ],
        } as SocialAuthServiceConfig,
      }],
  bootstrap: [AppComponent]
})

export class AppModule { }
