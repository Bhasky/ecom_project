import { Component } from '@angular/core';
import { user } from 'src/admin.model';
import { AdminuserService } from '../adminuser.service';
import { Router } from '@angular/router';
import {NgForm} from '@angular/forms';
 





@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent {
  allUsers: user[]=[];
  errormessage:string='';

  constructor(private adminuser:AdminuserService, private router:Router){}


  login(myform:any){
    let loginUser: user={
      uname:myform.value.uname,
      upassword:myform.value.upassword,
      token:''
    }
this.adminuser.fetchAllUsers().subscribe({
next:(response)=>
{this.allUsers=response;
let filterUser:user[] = this.allUsers.filter((eachUser)=>{
  return(eachUser.uname==loginUser.uname && eachUser.upassword==loginUser.upassword)
});
if(filterUser.length==1){
  this.router.navigate(['orders'])
}
else{
  this.errormessage="Invalid Username & password";
}
},
error:(err)=>{console.log(err)}
})

    
  }
}
