import {Component, OnInit} from '@angular/core';
import {CustomerService} from './customer.service';
import {NgForm} from '@angular/forms';
import {Customer} from './Model/Customer.model.';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  model: any = {};

  constructor(private customerService: CustomerService,
              private router: Router,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
  }

  onSubmit(forms: NgForm) {

    const formInput = forms.value;
    // const newCustomer = new Customer(formInput.firstName,
    //   formInput.middleName,
    //   formInput.lastName,
    //   formInput.sex,
    //   formInput.country);

    // console.log(newCustomer);

    this.customerService.create(this.model)
      .subscribe(
        data => {

        },
        error => {

          // this.loading = false;
        });

    forms.reset();

  }

  onNewCustomer() {
    this.router.navigate(['new'], {relativeTo: this.route});
  }

  onCustomerList() {
    this.router.navigate(['list'], {relativeTo: this.route});
  }

}
