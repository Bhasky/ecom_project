import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatSort, MatSortModule} from '@angular/material/sort';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { AdminuserService } from '../adminuser.service';


@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css'],
})

export class OrdersComponent {

  orders: any[]=[];

  displayedColumns = ['orderId', 'orderDate', 'shipName', 'shipAddress', 'amount', 'paymentStatus', 'orderStatus', 'action'];
  dataSource: any;


  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  @ViewChild(MatSort)
  sort!: MatSort;

  constructor(private adminuser:AdminuserService) {
    // Create 100 users
    // const users: UserData[] = [];
    // for (let i = 1; i <= 100; i++) { users.push(createNewUser(i)); }

    // Assign the data to the data source for the table to render
    // this.dataSource = new MatTableDataSource(users);



    this.adminuser.fetchOrders().subscribe({
      next:(response)=>
      {
        console.log(response)
        this.dataSource = new MatTableDataSource(response);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      },
      error:(err)=>{console.log(err)}
      })
  }

  /**
   * Set the paginator and sort after the view init since this component will
   * be able to query its view for the initialized paginator and sort.
   */
  ngAfterViewInit() {
    // this.dataSource.paginator = this.paginator;
    // this.dataSource.sort = this.sort;
  }

  applyFilter(event: any) {
    let filterValue = event.target.value; // Remove whitespace
    filterValue = filterValue.trim(); // Datasource defaults to lowercase matches
    filterValue.toLowerCase();
    this.dataSource.filter = filterValue;
  }

}

// function createNewUser(id: number): UserData {
//   // const name =
//   //     NAMES[Math.round(Math.random() * (NAMES.length - 1))] + ' ' +
//   //     NAMES[Math.round(Math.random() * (NAMES.length - 1))].charAt(0) + '.';

//   // return {
//   //   id: id.toString(),
//   //   name: name,
//   //   address: Math.round(Math.random() * 100).toString(),
//   //   mobile: COLORS[Math.round(Math.random() * (COLORS.length - 1))]
//   // };
//   return{
//     id: 'a',
//     shipName: 'test',
//     shipAddress: 'test address',
//     shipState:'processing',
//     shipPincode:'processing',
//     shipMobileNo: '900000000',
//     amount:'1234',
//     paymentStatus:'paid',
//     orderStatus:'processing',
    
//   };
// }

/** Constants used to fill up our data base. */
// const COLORS = ['maroon', 'red', 'orange', 'yellow', 'olive', 'green', 'purple',
//   'fuchsia', 'lime', 'teal', 'aqua', 'blue', 'navy', 'black', 'gray'];
// const NAMES = ['Maia', 'Asher', 'Olivia', 'Atticus', 'Amelia', 'Jack',
//   'Charlotte', 'Theodore', 'Isla', 'Oliver', 'Isabella', 'Jasper',
//   'Cora', 'Levi', 'Violet', 'Arthur', 'Mia', 'Thomas', 'Elizabeth'];

export interface UserData {
  id: string;
  shipName: string;
  shipAddress: string;
  shipState:string;
  shipPincode:string;
  shipMobileNo:string;
  amount:string;
  paymentStatus:string;
  orderStatus:string;
  
}