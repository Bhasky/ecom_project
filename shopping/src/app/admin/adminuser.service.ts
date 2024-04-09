import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { user } from 'src/admin.model';

@Injectable({
  providedIn: 'root'
})
export class AdminuserService {
  baseUrl:string="http://localhost:3000/";


  constructor(private httpClient:HttpClient) { }

  fetchAllUsers():Observable<user[]>{
    return this.httpClient.get<user[]>(this.baseUrl+"users");
  }

  fetchOrders():Observable<any[]>{
    return this.httpClient.get<any[]>(this.baseUrl+"orders");
  }

  storeToken(user:user):void{
    sessionStorage.setItem("userInfo",JSON.stringify(user))
  }

  removeToken(){
    sessionStorage.removeItem("userInfo");
  }

  fetchToken(){
    let userInfoString= sessionStorage.getItem("userInfo");
    let userInfo;
    if(userInfoString!=null)
    {
      userInfo=JSON.parse(userInfoString);
    }
    return userInfo;
  }
}
