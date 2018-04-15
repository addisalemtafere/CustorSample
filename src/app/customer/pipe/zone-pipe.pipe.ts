import {Pipe, PipeTransform} from '@angular/core';
import {CustomerService} from '../customer.service';
import {ZoneModel} from '../Model/Zone.model';
import 'rxjs/Rx';


@Pipe({
  name: 'zonePipe'
})
export class ZonePipePipe implements PipeTransform {

  zones: ZoneModel[] = [];

  constructor(private customerService: CustomerService) {
    //  this.getAllZone();
  }

  transform(code: any, args?: any): any {
    return this.customerService.getAllZone()
      .map(
        data => {
          this.zones = data;
          for (const zone of this.zones) {
            if (zone.code === code) {
              return zone.description;
            }
          }
          return null;
        },
        error => {
          console.log('Error');
        });
  }

  // getAllZone() {
  //   this.customerService.getAllZone()
  //     .subscribe(zones => {
  //       this.zones = zones;
  //     });
  // }

}
