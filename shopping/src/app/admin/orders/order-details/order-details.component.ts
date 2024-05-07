import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminuserService } from '../../adminuser.service';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css']
})
export class OrderDetailsComponent {

  fetchedOrder:orders={
    id:0,
    name:'',
    
  }

  constructor(private activatedRoute:ActivatedRoute,private router:Router, private adminuser:AdminuserService){}

  ngOnInit(): void {
    //1. fetch the studid from routing path
   let orderDetailID= this.activatedRoute.snapshot.paramMap.get('orderID');
   //with this extracted studid you have to go to service and 
   //subscribe to the service to  get student data
   if(orderDetailID!=null){
     this.adminuser.viewOrders(+orderDetailID).subscribe({
      next:(response)=>{this.fetchedOrder=response},
      error:(err)=>{console.log(err)}
     })
    }
    //diplay the extracted data in html

  }

}

export interface orders{
  id:number,
  name:string,
 }
