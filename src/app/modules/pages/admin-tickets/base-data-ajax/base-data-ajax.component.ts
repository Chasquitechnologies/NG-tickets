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

  public adminTickets:Ticket[];

  public brandDropdown: Brand[];
  public storeDropdown: Store[];
  public familyDropdown: Family[];
  public priorityDropdown: Priority[];
  public statusDropdown: Status[];

  public selectedBrand: number;
  public selectedStore: number;
  public selectedFamily: number;
  public selectedPriority: number;
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

    // delete following lines and implement server side color schema
    this.colorsClass = {
      Ingresado: 'm-badge m-badge--danger m-badge--wide',
      Asignado: 'm-badge m-badge--warning m-badge--wide', 
      Programado: 'm-badge m-badge--danger m-badge--wide',
      Atendido: 'm-badge m-badge--info m-badge--wide',
      Confirmado: 'm-badge m-badge--success m-badge--wide',
      Anulado: 'm-badge m-badge--default m-badge--wide',
      Reactivado: 'm-badge m-badge--danger m-badge--wide'
    }

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

    this.selectedBrand = 0;
    this.selectedStore = 0;
    this.selectedFamily = 0;
    this.selectedPriority = 0;
    this.selectedStatus = [{ id: 1, name: "Ingresado" },
                            { id: 2, name: "Asignado" },
                            { id: 3, name: "Programado" },
                            { id: 7, name: "Reactivado" }];
    this.endDate = new Date();
    this.starDate = new Date();
    this.starDate.setMonth(this.endDate.getMonth() - 12);
    this.dateRangeSelected = [this.starDate, this.endDate];

    //needs to be modified to take in correct tickets
    this.adminTickets = this.adminTicketService.getAdminTickets()
  
  }

  ngAfterViewInit() {
    // this._script.load('.m-grid__item.m-grid__item--fluid.m-wrapper',
    //   'assets/app/js/data-ajax.js');

  }

  onBrandChange(event): void {
    console.log(event);
    this.storeDropdown = this.dropdownService.getStores(parseInt(event.id))

  }


}
