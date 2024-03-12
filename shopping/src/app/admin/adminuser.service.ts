import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { user } from 'src/admin.model';

@Injectable({
  providedIn: 'root'
})
export class AdminuserService {
  baseUrl:string="";


  constructor(private httpClient:HttpClient) { }

  fetchAllUsers():Observable<user[]>{
    return this.httpClient.get<user[]>(this.baseUrl);
  }
}
