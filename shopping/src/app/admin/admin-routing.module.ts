import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminPagesComponent } from './admin-pages/admin-pages.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { OrdersComponent } from './orders/orders.component';
import { OrderDetailsComponent } from './orders/order-details/order-details.component';

const routes: Routes = [
  {
    path: '',
    component: AdminPagesComponent,
    children: [
      // {
      //   path: 'orders',
      //   component: OrdersComponent,
      // }
    ],
  },
  {path: 'dashboard', component: DashboardComponent,},
  {path: 'orders', component: OrdersComponent,},
  {path: 'orderDetails', component: OrderDetailsComponent,},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
