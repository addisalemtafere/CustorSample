import {Injectable} from '@angular/core';
import {KebeleModel} from './Model/Kebele.model';
import {Subject} from 'rxjs/Subject';

@Injectable()
export class AddressServiceService {

  private kebeles: KebeleModel[] = [];
  kebeleChanged = new Subject<KebeleModel[]>();

  constructor() {
  }

  setKebeles(kebele: KebeleModel[]) {
    this.kebeles = kebele;
    this.kebeleChanged.next(this.kebeles.slice());

  }

  getKebeles() {
    return this.kebeles.slice();
  }
}
