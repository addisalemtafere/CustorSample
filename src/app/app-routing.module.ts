import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Routes, RouterModule} from '@angular/router';
import {CustomerListComponent} from './customer/customer-list/customer-list.component';
import {CustomerComponent} from './customer/customer.component';
import {CustomerEditComponent} from './customer/customer-edit/customer-edit.component';
import {CustomerMaterialComponent} from './material-ui/customer-material/customer-material.component';
import {CustomerEditMaterialComponent} from './material-ui/customer-material/customer-edit-material/customer-edit-material.component';
import {CustomerListMaterialComponent} from './material-ui/customer-material/customer-list-material/customer-list-material.component';

const appRoutes: Routes = [
  {path: '', redirectTo: '/customer/list', pathMatch: 'full'},
  {
    path: 'customer', component: CustomerComponent,
    children: [
      {path: 'new', component: CustomerEditComponent},
      {path: ':id/edit', component: CustomerEditComponent},
      {path: 'list', component: CustomerListComponent}
    ]
  },
  {
    path: 'customerMaterialUi', component: CustomerMaterialComponent,
    children: [
      {path: 'newmterial', component: CustomerEditMaterialComponent},
      {path: ':id/editmaterial', component: CustomerEditMaterialComponent},
      {path: 'listmaterial', component: CustomerListMaterialComponent}
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
