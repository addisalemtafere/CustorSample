import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {CustomerService} from '../customer.service';
import {NgForm} from '@angular/forms';
import {Customer} from '../Model/Customer.model.';

import {ActivatedRoute} from '@angular/router';
import {Subscription} from 'rxjs/Subscription';
import {Region} from '../Model/Region.model';
import {ZoneModel} from '../Model/Zone.model';
import {WoredaModel} from '../Model/Woreda.model';
import {KebeleModel} from '../Model/Kebele.model';
import {Nationality} from '../Model/Country.model';

@Component({
  selector: 'app-customer-edit',
  templateUrl: './customer-edit.component.html',
  styleUrls: ['./customer-edit.component.css']
})
export class CustomerEditComponent implements OnInit, OnDestroy {

  @ViewChild('f') slForm: NgForm;
  subscription: Subscription;

  model: any = {};
  id: number;
  editMode = false;

  countries: Nationality[] = [];

  region: Region[] = [];
  zone: ZoneModel[] = [];
  selectedzone: ZoneModel[] = [];
  woreda: WoredaModel[] = [];
  selectedworeda: WoredaModel[] = [];
  kebele: KebeleModel[] = [];
  selectedkebele: KebeleModel[] = [];
  loading = false;


  constructor(private customerService: CustomerService,
              private route: ActivatedRoute) {
  }

  ngOnInit() {

    this.getRegion();
    this.getCountry();
    this.getAllZones();
    this.getAllWoreda();
    this.getAllKebele();

    this.subscription = this.customerService.startingEditing
      .subscribe((customer: Customer) => {

        this.editMode = true;
        this.model = customer;
        console.log(this.model.zone);
        this.onSelectZone(customer.zone);

      });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  onSubmit(forms: NgForm) {

    this.loading = true;
    if (!this.editMode) {
      this.customerService.create(this.model)
        .subscribe(
          data => {
            this.loading = false;

            alert('successfully added');
          },
          error => {
            alert('error occured' + error);

            this.loading = false;
          });
    } else {
      this.customerService.update(this.model)
        .subscribe(
          data => {
            alert('successfully updated');
            this.editMode = false;
          },
          error => {

            // this.loading = false;
          });
    }


    forms.reset();


  }


  onClear() {
    this.slForm.reset();
    this.editMode = false;
  }


  onSelectRegion(code: number) {
    this.selectedzone = [];
    this.selectedworeda = [];
    this.selectedkebele = [];
    this.selectedzone = this.zone.filter((item) => {
      return item.parent === String(code);
    });
  }

  onSelectZone(code: any) {
    this.selectedworeda = this.woreda.filter((item) => {
      return item.parent === String(code);
    });
  }

  onSelectWoredas(code: number) {
    this.selectedkebele = this.kebele.filter((item) => {
      return item.parent === String(code);
    });
  }


  getCountry() {
    this.customerService.getAllCountry().subscribe(countries => {
      this.countries = countries;

    });
  }

  getRegion() {
    this.customerService.getAllRegion().subscribe(regions => {
      this.region = regions;

    });
  }

  getAllZones() {
    this.customerService.getAllZone().subscribe(zones => {
      this.zone = zones;
      this.selectedzone = zones;
      // console.log(this.selectedworeda);
    });

  }

  getAllWoreda() {
    this.customerService.getAllWoreda().subscribe(woredas => {
      this.woreda = woredas;
      this.selectedworeda = woredas;
      // console.log(this.woreda);
    });
  }

  getAllKebele() {
    this.customerService.getAllKebele()
      .subscribe(kebeles => {
        this.kebele = kebeles;
        // this.selectedkebele = this.kebele;
      });
  }
}
