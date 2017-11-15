import { Injectable } from '@angular/core';
import { Brand } from '../models/Brand';
import { Store } from '../models/Store';
import { Family } from '../models/Family';
import { Priority } from '../models/Priority';
import { Status } from '../models/Status';

@Injectable()
export class FilterDropDownService {
  private allPriorities: Priority[];
  private allStores: Store[];
  private allFamilies: Family[];
  private allStatus: Status[];

  // public StoreDropDown: any[];
  // public FamilyDropDown: any[];
  // public PriorityDropDown: any[];
  // public StatusDropDown: any[];

  constructor() { }

  public getBrands(): Brand[] {

    return [
      { id: 0, name: "All" },
      { id: 1, name: "Bembos" },
      { id: 2, name: "China Wok" },
      { id: 3, name: "Don Belisario" },
      { id: 4, name: "Dunkin' Donuts" },
      { id: 5, name: "Papa John's" },
      { id: 6, name: "Popeyes" }
    ]
  }

  getStores(brandId: number): Store[] {

    this.allStores = [
      { id: 0, brandId: 0, name: "All" },
      { id: 1, brandId: 1, name: "BB - Aurora" },
      { id: 2, brandId: 1, name: "BB - Plaza San Miguel" },
      { id: 3, brandId: 1, name: "BB - Regatas" },
      { id: 6, brandId: 2, name: "CW - Store 1" },
      { id: 7, brandId: 2, name: "CW - Store 2" },
      { id: 7, brandId: 2, name: "CW - Store 3" },
      { id: 7, brandId: 3, name: "DB - Store 1" },
      { id: 7, brandId: 3, name: "DB - Store 2" },
      { id: 7, brandId: 3, name: "DB - Store 3" },
      { id: 7, brandId: 4, name: "DD - Store 1" },
      { id: 7, brandId: 4, name: "DD - Store 2" },
      { id: 7, brandId: 4, name: "DD - Modulo Plaza Vea El Cortijo (6149)" },
      { id: 7, brandId: 5, name: "PJ - Store 1" },
      { id: 7, brandId: 5, name: "PJ - Store 2" },
      { id: 7, brandId: 5, name: "PJ - Store 3" },
      { id: 7, brandId: 6, name: "PP - Store 1" },
      { id: 7, brandId: 6, name: "PP - Store 2" },
      { id: 7, brandId: 6, name: "PP - Store 3" },
    ]

    if (brandId == 0) {
      return this.allStores;
    } else {
      return this.allStores.filter(
        store => store.brandId === brandId);
    }
  }

  getFamilies(): Family[] {
    this.allFamilies = [
      { id: 0, name: "All" },
      { id: 1, name: "Family 1" },
      { id: 2, name: "Family 2" },
      { id: 3, name: "Family 3" },
      { id: 4, name: "Family 4" }
    ]

    return this.allFamilies
  }

  getPriorities(): Priority[] {
    this.allPriorities = [
      { id: 0, name: "All" },
      { id: 1, name: "Priority 1" },
      { id: 2, name: "Priority 2" },
      { id: 3, name: "Priority 3" },
      { id: 4, name: "Priority 4" }
    ]
    return this.allPriorities
  }


  getStatus(): Status[] {
    this.allStatus = [
      { id: 0, name: "All" },
      { id: 1, name: "Ingresado" },
      { id: 2, name: "Asignado" },
      { id: 3, name: "Programado" },
      { id: 4, name: "Atendido" },
      { id: 5, name: "Confirmado" },
      { id: 6, name: "Anulado" },
      { id: 7, name: "Reactivado" },
    ]
    return this.allStatus
  }

}
