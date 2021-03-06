import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {FooterComponent} from './footer/footer.component';
import {NavbarComponent} from './navbar/navbar.component';
import {SidebarComponent} from './sidebar/sidebar.component';
import {MaterialModule} from './material/material.module';
import {CustomerComponent} from './customer/customer.component';
import {CustomerService} from './customer/customer.service';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {CustomerListComponent} from './customer/customer-list/customer-list.component';
import {AppRoutingModule} from './app-routing.module';
import { CustomerEditComponent } from './customer/customer-edit/customer-edit.component';
import { RegionPipePipe } from './customer/pipe/region-pipe.pipe';

import { FilterPipePipe } from './customer/pipe/filter-pipe.pipe';

import { ZonePipePipe } from './customer/pipe/zone-pipe.pipe';
import { WoredaPipePipe } from './customer/pipe/woreda-pipe.pipe';
import { CountryPipePipe } from './customer/pipe/country-pipe.pipe';
import {AddressServiceService} from './customer/address-service.service';
import {PagerServiceService} from './customer/services/pager-service.service';
import { BootstrapAlertModule } from 'ngx-bootstrap-alert';
import { CustomerMaterialComponent } from './material-ui/customer-material/customer-material.component';
import { CustomerListMaterialComponent } from './material-ui/customer-material/customer-list-material/customer-list-material.component';
import { CustomerEditMaterialComponent } from './material-ui/customer-material/customer-edit-material/customer-edit-material.component';
import {MatNativeDateModule} from '@angular/material';
import {FlexLayoutModule} from '@angular/flex-layout';



@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavbarComponent,
    SidebarComponent,
    CustomerComponent,
    CustomerListComponent,
    CustomerEditComponent,
    RegionPipePipe,
    FilterPipePipe,
    ZonePipePipe,
    WoredaPipePipe,
    CountryPipePipe,
    CustomerMaterialComponent,
    CustomerListMaterialComponent,
    CustomerEditMaterialComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BootstrapAlertModule,
    MatNativeDateModule,
    FlexLayoutModule
  ],
  providers: [CustomerService, AddressServiceService, PagerServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
