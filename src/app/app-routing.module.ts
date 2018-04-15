import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Routes, RouterModule} from '@angular/router';
import {CustomerListComponent} from './customer/customer-list/customer-list.component';
import {CustomerComponent} from './customer/customer.component';
import {CustomerEditComponent} from './customer/customer-edit/customer-edit.component';

const appRoutes: Routes = [
  {path: '', redirectTo: '/customer/list', pathMatch: 'full'},
  {
    path: 'customer', component: CustomerComponent, children: [
    {path: 'new', component: CustomerEditComponent},
    {path: ':id/edit', component: CustomerEditComponent},
    {path: 'list', component: CustomerListComponent}
  ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule {
}
