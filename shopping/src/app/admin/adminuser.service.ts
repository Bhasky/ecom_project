import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { user } from 'src/admin.model';
import { AuthserviceService } from './Service/authservice.service';
@Injectable({
  providedIn: 'root'
})
export class AdminuserService {
  
  baseUrl:string="http://localhost:3000/";

  newHeader: HttpHeaders=new HttpHeaders().set('Authorization','Bearer'+this['AuthserviceService'].fetchToken().token);

  constructor(private httpClient:HttpClient) { }

  fetchAllUsers():Observable<user[]>{
    return this.httpClient.get<user[]>(this.baseUrl+"users");
  }

  fetchOrders():Observable<any[]>{
    return this.httpClient.get<any[]>(this.baseUrl+"orders");
  }

  viewOrders(orderDetailID:any):Observable<any>{
    return this.httpClient.get<any>(this.baseUrl+'/'+orderDetailID,{headers:this.newHeader});//http://localhost:3000/student/101
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

  // getAStudent(orderDetailID:any):Observable<any>{
  //   return this.httpClient.get<any>(this.baseUrl+'/'+orderDetailID,{headers:this.newHeader});//http://localhost:3000/student/101
  // } 
}
