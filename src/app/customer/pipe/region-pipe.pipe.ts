import {OnInit, Pipe, PipeTransform} from '@angular/core';
import {CustomerService} from '../customer.service';
import {Region} from '../Model/Region.model';

@Pipe({
  name: 'regionPipe'
})
export class RegionPipePipe implements PipeTransform {

  allRegion: Region[] = [];
 constructor(private customerService: CustomerService) {
    this.getRegion();
  }

  transform(code: any, args?: any): any {

    for (const region of this.allRegion) {
      if (region.code === code) {
        return region.description;
      }
    }
    return null;

  }

  getRegion() {
    this.customerService.getAllRegion().subscribe(regions => {
      this.allRegion = regions;
    });
  }
}
