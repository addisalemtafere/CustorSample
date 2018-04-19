import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {Subscription} from 'rxjs/Subscription';
import {Nationality} from '../../../customer/Model/Country.model';
import {Region} from '../../../customer/Model/Region.model';
import {ZoneModel} from '../../../customer/Model/Zone.model';
import {WoredaModel} from '../../../customer/Model/Woreda.model';
import {KebeleModel} from '../../../customer/Model/Kebele.model';
import {CustomerService} from '../../../customer/customer.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Customer} from '../../../customer/Model/Customer.model.';
import {BootstrapAlertService, BootstrapAlert} from 'ngx-bootstrap-alert';

@Component({
  selector: 'app-customer-edit-material',
  templateUrl: './customer-edit-material.component.html',
  styleUrls: ['./customer-edit-material.component.css']
})
export class CustomerEditMaterialComponent implements OnInit, OnDestroy {

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
              private route: ActivatedRoute,
              private router: Router,
              private bootstrapAlertService: BootstrapAlertService) {
  }

  ngOnInit() {

    this.getCountry();
    this.getRegion();
    this.getAllZones();
    this.getAllWoreda();
    this.getAllKebele();

    this.subscription = this.customerService.startingEditing
      .subscribe((customer: Customer) => {

        this.editMode = true;
        this.model = customer;
        this.loading = true;


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
            this.bootstrapAlertService.alert(new BootstrapAlert('Successfuly Added!', 'alert-success'));


          },
          error => {
            this.bootstrapAlertService.alert(new BootstrapAlert('Error occuredd', 'alert-danger'));

            this.loading = false;
          });
    } else {
      this.customerService.update(this.model)
        .subscribe(
          data => {
            this.bootstrapAlertService.alert(new BootstrapAlert('successfully updated!', 'alert-success'));

            this.editMode = false;
            this.loading = false;
            // this.router.navigate([''], {relativeTo: this.route});

          },
          error => {
            this.loading = false;
            this.bootstrapAlertService.alert(new BootstrapAlert('Error occured not Updated!', 'alert-danger'));

          });
    }
    forms.reset();


  }


  onClear() {
    this.slForm.reset();
    this.editMode = false;
  }


  onSelectRegion(code: any) {
    console.log(code);
    this.selectedzone = [];
    this.selectedworeda = [];
    this.selectedkebele = [];
    this.selectedzone = this.zone.filter((item) => {
      return item.parent === String(code);
    });
  }

  onSelectZone(code: any) {

    this.selectedworeda = [];
    this.selectedkebele = [];
    this.selectedworeda = this.woreda.filter((item) => {
      return item.parent === String(code);
    });
  }

  onSelectWoredas(code: any) {
    this.selectedkebele = [];
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
      // this.onSelectRegion(this.model.region);
    });

  }

  getAllWoreda() {
    this.customerService.getAllWoreda().subscribe(woredas => {
      this.woreda = woredas;
      this.onSelectZone(this.model.zone);
    });
  }

  getAllKebele() {
    this.customerService.getAllKebele()
      .subscribe(kebeles => {
        this.kebele = kebeles;
        this.onSelectWoredas(this.model.wereda);
        this.loading = false;
      });
  }


}
