import {Component, OnInit} from '@angular/core';
import {CustomerService} from '../customer.service';
import {Customer} from '../Model/Customer.model.';
import {ActivatedRoute, Router} from '@angular/router';
import {Region} from '../Model/Region.model';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {
  customer: Customer[] = [];
  region: Region[] = [];
  loading = true;

  constructor(private customerService: CustomerService,
              private router: Router,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.getAllCustomer();

  }

  getAllCustomer() {

    this.customerService.getAll().subscribe(customers => {
      this.customer = customers;
      // console.log(this.customer);
      this.loading = false;
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

  editCustomer(customer: Customer, index: number) {

    // this.customerService.startingEditing.next(index);
    setTimeout(() => this.customerService.startingEditing.next(customer), 0);

    this.router.navigate(['edit'], {relativeTo: this.route});
    // console.log(customer.firstName + '   and index of  ' + index);
  }


}
