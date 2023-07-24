import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminPagesComponent } from './admin-pages/admin-pages.component';
import { AdminLoginComponent } from '../admin-login/admin-login.component';

const routes: Routes = [
  {
    path: '',
    component: AdminPagesComponent,
    children: [
      {
        path: 'login',
        component: AdminLoginComponent,
      },
      
      
    ],
    
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
