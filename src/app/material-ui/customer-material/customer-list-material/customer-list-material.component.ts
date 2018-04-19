import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {CustomerService} from '../../../customer/customer.service';
import {Customer} from '../../../customer/Model/Customer.model.';
import {MatPaginator, MatTableDataSource} from '@angular/material';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-customer-list-material',
  templateUrl: './customer-list-material.component.html',
  styleUrls: ['./customer-list-material.component.css']
})
export class CustomerListMaterialComponent implements OnInit, AfterViewInit {

  displayedColumns = [
    'fname',
    'mname',
    'lname',
    'gender',
    'country',
    'region',
    // 'zone',
    'wereda',
    'houseno',
    'mobileno',
    'birthdate',
    'action',
  ];
  customers: Customer[];
  dataSource: any;
  loading = true;

  // // dataSource = new MatTableDataSource<Customer>(this.customers);
  // dataSource = new MatTableDataSource<Customer>(this.customers);
  @ViewChild(MatPaginator) paginator: MatPaginator;


  constructor(private customerService: CustomerService,
              private router: Router,
              private route: ActivatedRoute) {

  }


  ngOnInit() {
    this.getAllCustomer();
  }


  ngAfterViewInit() {
    // this.dataSource.paginator = this.paginator;
  }


  getAllCustomer() {

    this.customerService.getAll().subscribe(customers => {
      this.dataSource = new MatTableDataSource<Customer>(customers);
      this.loading = false;
      this.dataSource.paginator = this.paginator;
      // console.log(this.dataSource);
    });
  }

  deleteCustomer(customerId: number) {
    const response = confirm('Do you want to Delete this Customer ?');
    if (response === true) {
      this.customerService.delete(customerId).subscribe(() => {
        this.getAllCustomer();
      });
      return true;
    } else {
      return false;
    }

  }

  editCustomer(customer: Customer) {

    setTimeout(() => this.customerService.startingEditing.next(customer), 0);

    this.router.navigate(['editmaterial'], {relativeTo: this.route});
  }

  onRowClicked(row) {
    console.log('Row clicked: ', row);
  }
}




