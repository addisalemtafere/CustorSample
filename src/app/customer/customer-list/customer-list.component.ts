import {Component, OnInit} from '@angular/core';
import {CustomerService} from '../customer.service';
import {Customer} from '../Model/Customer.model.';
import {ActivatedRoute, Router} from '@angular/router';
import {Region} from '../Model/Region.model';
import {PagerServiceService} from '../services/pager-service.service';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {
  customer: Customer[] = [];
  region: Region[] = [];
  loading = true;
  // pager object
  pager: any = {};

  // paged items
  pagedItems: any[];

  constructor(private customerService: CustomerService,
              private router: Router,
              private route: ActivatedRoute,
              private pagerService: PagerServiceService) {
  }

  ngOnInit() {
    this.getAllCustomer();

  }

  getAllCustomer() {

    this.customerService.getAll().subscribe(customers => {
      this.customer = customers;
      this.setPage(1);
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

  setPage(page: number) {
    if (page < 1 || page > this.pager.totalPages) {
      return;
    }

    // get pager object from service
    this.pager = this.pagerService.getPager(this.customer.length, page);

    // get current page of items
    this.pagedItems = this.customer.slice(this.pager.startIndex, this.pager.endIndex + 1);
  }



}
