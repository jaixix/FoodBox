import { Injectable, Output } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  constructor() {}
  loginToken : Number = -1;

  setLoginToken(loadToken:Number){
    this.loginToken = loadToken;
  }

  @Output()
  getLoginToken(){
    return this.loginToken;
  }
}
