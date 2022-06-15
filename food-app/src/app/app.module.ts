import { Component, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { CuisinesComponent } from './cuisines/cuisines.component';
import { ViewcuisinesComponent } from './viewcuisines/viewcuisines.component';
import { UsersComponent } from './users/users.component';
import { ViewusersComponent } from './viewusers/viewusers.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { CookieService } from 'ngx-cookie-service';
import { ViewcuisinesuserComponent } from './viewcuisinesuser/viewcuisinesuser.component';
import { CartComponent } from './cart/cart.component';
import { FilterPipe } from './viewcuisines/filtercuisine.pipe';
// import { CookieService } from 'ngx-cookie-service';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'addcuisine', component:CuisinesComponent},
  { path: 'viewcuisines', component:ViewcuisinesComponent},
  { path: 'adduser', component:UsersComponent},
  { path: 'viewusers', component:ViewusersComponent},
  { path: 'login', component:LoginComponent},
  { path: 'register', component:RegistrationComponent},
  { path: 'viewcuisinesuser', component:ViewcuisinesuserComponent},
  { path: 'usercart', component:CartComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CuisinesComponent,
    ViewcuisinesComponent,
    UsersComponent,
    ViewusersComponent,
    LoginComponent,
    RegistrationComponent,
    ViewcuisinesuserComponent,
    CartComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule
  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
