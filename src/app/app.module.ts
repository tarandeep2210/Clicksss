import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {RouterModule} from '@angular/router';


import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SignInComponent } from './sign-in/sign-in.component';
import { JoinComponent } from './join/join.component';
import { HomeComponent } from './home/home.component';
import { PhotographerDetailComponent } from './photographer-detail/photographer-detail.component';
import { ThankyouComponent } from './thankyou/thankyou.component';
import { SignupComponent } from './signup/signup.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SignInComponent,
    JoinComponent,
    HomeComponent,
    PhotographerDetailComponent,
    ThankyouComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,FormsModule,
    [ RouterModule.forRoot(

      [
        { path: 'signin', component: SignInComponent },
        { path: 'signup', component: SignupComponent },
        { path: 'join', component: JoinComponent },
        { path: 'home', component: HomeComponent },
        {
          path: 'photographer/:id',
          component: PhotographerDetailComponent
        },
        { path: 'thankyou', component: ThankyouComponent },
        { path: '', redirectTo: '/join', pathMatch: 'full' }

      ]

    ) ]

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
