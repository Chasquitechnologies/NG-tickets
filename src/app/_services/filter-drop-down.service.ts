import { Injectable } from '@angular/core';
import { Brand } from '../models/Brand';
import { Store } from '../models/Store';
import { Family } from '../models/Family';
import { Priority } from '../models/Priority';
import { Status } from '../models/Status';
import { DAOmockup } from '../mockupData/DAOmockup';

@Injectable()
export class FilterDropDownService {

  //delete if not on production build
  public DAO: DAOmockup = new DAOmockup();

  //good
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

    return this.DAO.getAllBrands();

  }

  public getStores(brandId: number): Store[] {

    return this.DAO.getAllStores(brandId);

  }

  public getFamilies(): Family[] {

    return this.DAO.getAllFamilies();
    
  }

  public getPriorities(): Priority[] {

    return this.DAO.getAllPriorities();

  }


  public getStatus(): Status[] {

    return this.DAO.getAllStatus();

  }

}
