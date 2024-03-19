import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminPagesComponent } from './admin-pages/admin-pages.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AppHeaderComponent } from './app-header/app-header.component';
import { AppNavComponent } from './app-nav/app-nav.component';
import { MatIconModule } from '@angular/material/icon';
import { OrdersComponent } from './orders/orders.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';








@NgModule({
  declarations: [
    AdminPagesComponent,
    AdminLoginComponent,
    DashboardComponent,
    AppHeaderComponent,
    AppNavComponent,
    OrdersComponent,

    

  ],
  // schemas: [ CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MatIconModule,
    MatPaginatorModule,
    MatTableModule,
    FormsModule,
    HttpClientModule
    
    
    
  ],
  exports:[
    OrdersComponent,
    
  ],

})
export class AdminModule { }
