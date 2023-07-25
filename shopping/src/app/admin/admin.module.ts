import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminPagesComponent } from './admin-pages/admin-pages.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';


@NgModule({
  declarations: [
    AdminPagesComponent,
    AdminLoginComponent,
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
