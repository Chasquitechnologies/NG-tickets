import { Injectable } from '@angular/core';
import { Brand } from '../models/Brand';
import { Store } from '../models/Store';
import { Family } from '../models/Family';
import { Priority } from '../models/Priority';
import { Status } from '../models/Status';
import { DAOmockup } from '../mockupData/DAOmockup';
import { Subject } from 'rxjs/Subject';
import { TicketSummaryQuery } from '../models/TicketSummaryQuery';

@Injectable()
export class FilterDropDownService {

  //delete if not on production build
  public DAO: DAOmockup = new DAOmockup();

  //good
  private allPriorities: Priority[];
  private allStores: Store[];
  private allFamilies: Family[];
  private allStatus: Status[];

  //storing dropdown last selections on singleton
  public lastSelectedBrand: Brand;
  public lastSelectedStore: Store;
  public lastSelectedFamily: Family;
  public lastSelectedPriority: Priority;
  public lastSelectedStatus: Status[];
  public dateRangeSelected: Date[];

  // SETTING OBSERVABLE TO SHARE DATA WITH PARENT COMPONENT
  // Observable TicketSummaryQuery sources
  private ticketSummaryQuerySource = new Subject<TicketSummaryQuery>();

  // Observable TicketSummaryQuery streams
  ticketSummaryQuery$ = this.ticketSummaryQuerySource.asObservable();

  // Service message commands
  public modifyTicketSummaryQuery (ticketSummaryQuery: TicketSummaryQuery) {
    this.ticketSummaryQuerySource.next(ticketSummaryQuery);
  }
  

  constructor() {
    this.lastSelectedBrand = { id: 0, name: 'All' };
    this.lastSelectedStore = { id: 0, brandId: 0, name: "All" };
    this.lastSelectedFamily = { id: 0, name: 'All' };;
    this.lastSelectedPriority = { id: 0, name: 'All' };;
    this.lastSelectedStatus = [{ id: 1, name: "Ingresado" },
                              { id: 12, name: "Asignado" },
                              { id: 2, name: "Programado" },
                              { id: 13, name: "Reactivado" }];
    let endDate: Date = new Date();
    let starDate: Date = new Date();
    
    starDate.setMonth(endDate.getMonth() - 12);
    this.dateRangeSelected = [starDate, endDate];

  }

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

  // SETTERS AND GETTERS FOR LASTSELECTED DROPDOWN ITEMS
  public setlastSelectedBrand(brand: Brand): void {
    this.lastSelectedBrand = brand;
  }

  public getlastSelectedBrand(): Brand {
    return this.lastSelectedBrand;
  }

  public setlastSelectedStore(store: Store): void {
    this.lastSelectedStore = store;
  }

  public getlastSelectedStore(): Store {
    return this.lastSelectedStore;
  }

  public setlastSelectedFamily(family: Family): void {
    this.lastSelectedFamily = family;
  }

  public getlastSelectedFamily(): Family {
    return this.lastSelectedFamily;
  }

  public setlastSelectedPriority(priority: Priority): void {
    this.lastSelectedPriority = priority;
  }

  public getlastSelectedPriority(): Priority {
    return this.lastSelectedPriority;
  }

  public setlastSelectedStatus(status: Status[]): void {
    this.lastSelectedStatus = status;
  }

  public getlastSelectedStatus(): Status[] {
    return this.lastSelectedStatus;
  }

  public setlastSelectedDateRange(dateRange: Date[]): void {
    this.dateRangeSelected = dateRange;
  }

  public getlastSelectedDateRange(): Date[] {
    return this.dateRangeSelected;
  }





}
