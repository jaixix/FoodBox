import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { LoginServiceService } from './login-service.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'food-app';

  constructor(private http : HttpClient, private router : Router, private loginService : LoginServiceService, private cookieService : CookieService) { }
  // loginToken = this.loginService.getLoginToken();
  loginToken = this.cookieService.get('loginToken');

  onLogout(){
    this.cookieService.set('loginToken','-1');
    // console.log(this.loginService.getLoginToken());
    this.router.navigateByUrl('/login');
  }

  reloadCurrentRoute() {
    let currentUrl = this.router.url;
    this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
        this.router.navigate([currentUrl]);
    });
  }
}
