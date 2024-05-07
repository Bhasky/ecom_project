import { Injectable } from '@angular/core';
import { user } from 'src/admin.model';

@Injectable({
  providedIn: 'root'
})
export class AuthserviceService {

  constructor() { }

  // isLoggedIn():boolean{
  //   return false;
  // }

  // storeToken(user:user):void{
  //   sessionStorage.setItem("userInfo",JSON.stringify(user))
  // }

  // removeToken(){
  //   sessionStorage.removeItem("userInfo");
  // }

  // fetchToken(){
  //   let userInfoString= sessionStorage.getItem("userInfo");
  //   let userInfo;
  //   if(userInfoString!=null)
  //   {
  //     userInfo=JSON.parse(userInfoString);
  //   }
  //   return userInfo;
  // }

}
