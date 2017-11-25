import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ScriptLoaderService } from '../../../../_services/script-loader.service';
import { FilterDropDownService } from '../../../../_services/filter-drop-down.service';
import { Brand } from '../../../../models/Brand';
import { Store } from '../../../../models/Store';
import { Family } from '../../../../models/Family';
import { Priority } from '../../../../models/Priority';
import { Status } from '../../../../models/Status';
import { AdminTicketService } from '../../../../_services/admin-ticket-service.service'
import { Ticket } from '../../../../models/Ticket';

// declare var jquery: any;
// declare var $: any;

@Component({
  templateUrl: "./base-data-ajax.component.html",
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./base-data-ajax.component.css']
})

export class BaseDataAjaxComponent implements OnInit {

  public adminTickets: Ticket[];

  public brandDropdown: Brand[];
  public storeDropdown: Store[];
  public familyDropdown: Family[];
  public priorityDropdown: Priority[];
  public statusDropdown: Status[];

  public selectedBrand: Brand;
  public selectedStore: Store;
  public selectedFamily: Family;
  public selectedPriority: Priority;
  public selectedStatus: Status[];

  public dateNow: Date;
  public dateRangeSelected: Date[];
  public starDate: Date;
  public endDate: Date;

  public colorsClass: object;
  public statusColor: object;


  constructor(private _script: ScriptLoaderService, private dropdownService: FilterDropDownService,
    private adminTicketService: AdminTicketService) {

  }
  ngOnInit() {

    // must eventually delete following lines and implement server side color schema
    this.statusColor = {
      Ingresado: '#ed6b75',
      Asignado: '#F1C40F',
      Programado: '#F68D33',
      Atendido: '#659be0',
      Confirmado: '#22c103',
      Anulado: '#bac3d0',
      Reactivado: '#ed6b75'
    }


    this.brandDropdown = this.dropdownService.getBrands();
    this.storeDropdown = this.dropdownService.getStores(0);
    this.familyDropdown = this.dropdownService.getFamilies();
    this.priorityDropdown = this.dropdownService.getPriorities();
    this.statusDropdown = this.dropdownService.getStatus();

    this.selectedBrand = { id: 0, name: 'All' };
    this.selectedStore = { id: 0, brandId: 0, name: "All" };
    this.selectedFamily = { id: 0, name: 'All' };;
    this.selectedPriority = { id: 0, name: 'All' };;
    this.selectedStatus = [{ id: 1, name: "Ingresado" },
    { id: 12, name: "Asignado" },
    { id: 2, name: "Programado" },
    { id: 13, name: "Reactivado" }];
    this.endDate = new Date();
    this.starDate = new Date();
    this.starDate.setMonth(this.endDate.getMonth() - 12);
    this.dateRangeSelected = [this.starDate, this.endDate];

    //needs to be modified to take in correct tickets
    this.adminTickets = this.adminTicketService.getAdminTickets(this.selectedBrand.id, this.selectedStore.id, this.selectedFamily.id, this.selectedPriority.id, this.selectedStatus);

  }

  ngAfterViewInit() {
    // this._script.load('.m-grid__item.m-grid__item--fluid.m-wrapper',
    //   'assets/app/js/data-ajax.js');

  }

  onBrandChange(event): void {
    console.log(event);
    // Store selected brand locally and on service singleton(to be implemented)

    // filter store dropdon and select first store
    this.storeDropdown = this.dropdownService.getStores(parseInt(event.id))
    this.selectedStore = this.storeDropdown[0];
    
    //Updating tickets
    this.adminTickets = this.adminTicketService.getAdminTickets(this.selectedBrand.id, this.selectedStore.id, this.selectedFamily.id, this.selectedPriority.id, this.selectedStatus);


  }

  onStoreChange(event): void {
    console.log(event);
    // TODO: Store selected brand on service singleton(to be implemented)

    //Updating tickets
    this.adminTickets = this.adminTicketService.getAdminTickets(this.selectedBrand.id, this.selectedStore.id, this.selectedFamily.id, this.selectedPriority.id, this.selectedStatus);


  }

  onOtherDropdownChange(event): void {
    console.log(event);
    // TODO: Store selected Family, Priority & Status on service singleton(to be implemented)

    //Updating tickets
    this.adminTickets = this.adminTicketService.getAdminTickets(this.selectedBrand.id, this.selectedStore.id, this.selectedFamily.id, this.selectedPriority.id, this.selectedStatus);


  }


}
