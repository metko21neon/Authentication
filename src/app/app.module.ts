import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AngularFireModule } from 'angularfire2';
import { AppRoutingModule } from './app-routing.module';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { EmailComponent } from './email/email.component';
import { SignupComponent } from './signup/signup.component';
import { MembersComponent } from './members/members.component';

import { AuthGuard  } from './auth.service';

export const firebaseConfig = {
    apiKey: 'AIzaSyBMnZ5XTqAVfRNy5C_RbnRIXHpJOw7PyZI',
    authDomain: 'authentication-system-d2047.firebaseapp.com',
    databaseURL: 'https://authentication-system-d2047.firebaseio.com',
    projectId: 'authentication-system-d2047',
    storageBucket: 'authentication-system-d2047.appspot.com',
    messagingSenderId: '540226895393'
};

@NgModule({
    declarations: [
        AppComponent,
        LoginComponent,
        EmailComponent,
        SignupComponent,
        MembersComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule,
        AppRoutingModule,
        AngularFireAuthModule,
        BrowserAnimationsModule,
        AngularFireModule.initializeApp(firebaseConfig)
    ],
    providers: [ AuthGuard ],
    bootstrap: [ AppComponent ]
})
export class AppModule { }
