import {Component, OnInit} from '@angular/core';
import {CustomerService} from '../../customer/customer.service';
import {Router, ActivatedRoute} from '@angular/router';
import {NgForm} from '@angular/forms';


@Component({
  selector: 'app-customer-material',
  templateUrl: './customer-material.component.html',
  styleUrls: ['./customer-material.component.css']
})
export class CustomerMaterialComponent implements OnInit {

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
    this.router.navigate(['newmterial'], {relativeTo: this.route});
  }

  onCustomerList() {
    this.router.navigate(['listmaterial'], {relativeTo: this.route});
  }
}
