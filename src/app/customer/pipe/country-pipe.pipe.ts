import {Pipe, PipeTransform} from '@angular/core';
import {Nationality} from '../Model/Country.model';
import {CustomerService} from '../customer.service';

@Pipe({
  name: 'countryPipe'
})
export class CountryPipePipe implements PipeTransform {

  country: Nationality[] = [];


  constructor(private customerService: CustomerService) {
  }

  transform(code: any, args?: any): any {

    return this.customerService.getAllCountry()
      .map(
        data => {
          this.country = data;
          for (const country of this.country) {
            if (country.code === code) {
              return country.amdescription;
            }
          }
          return null;
        },
        error => {
          console.log('Error country pipe');
        });
  }
}
