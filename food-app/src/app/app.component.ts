import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginServiceService } from './login-service.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'food-app';

  constructor(private http : HttpClient, private router : Router, private loginService : LoginServiceService) { }
  loginToken = this.loginService.getLoginToken();

  onLogout(){
    this.loginService.setLoginToken(-1);
    console.log(this.loginService.getLoginToken());
    this.router.navigateByUrl('/login');
  }

  reloadCurrentRoute() {
    let currentUrl = this.router.url;
    this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
        this.router.navigate([currentUrl]);
    });
  }
}
