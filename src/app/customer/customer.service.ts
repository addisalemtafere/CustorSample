import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Customer} from './Model/Customer.model.';
import {Subject} from 'rxjs/Subject';
import {Region} from './Model/Region.model';
import {ZoneModel} from './Model/Zone.model';
import {WoredaModel} from './Model/Woreda.model';
import {KebeleModel} from './Model/Kebele.model';
import {Nationality} from "./Model/Country.model";

@Injectable()
export class CustomerService {


  startingEditing = new Subject<Customer>();
  region = new Subject<Region[]>();
  baseUrl = 'http://localhost:56862/api';

  constructor(private http: HttpClient) {
  }

  getAll() {
    return this.http.get<Customer[]>(this.baseUrl + '/customers');
  }

  getById(customerId: number) {
    return this.http.get(this.baseUrl + '/Customers/' + customerId);
  }

  create(customer: Customer) {
    return this.http.post(this.baseUrl + '/Customers', customer);
  }

  update(customer: Customer) {
    return this.http.put(this.baseUrl + '/Customers/' + customer.customerId, customer);
  }

  delete(customerId: number) {
    return this.http.delete(this.baseUrl + '/Customers/' + customerId);
  }

  getAllCountry() {
    return this.http.get<Nationality[]>(this.baseUrl + '/Nationalities');
  }

  getAllRegion() {
    return this.http.get<Region[]>(this.baseUrl + '/Regions');
  }

  getAllZone() {
    return this.http.get<Region[]>(this.baseUrl + '/zones');
  }

  getAllWoreda() {
    return this.http.get<WoredaModel[]>(this.baseUrl + '/woredas');
  }

  getAllKebele() {
    return this.http.get<KebeleModel[]>(this.baseUrl + '/kebeles');
  }
}
