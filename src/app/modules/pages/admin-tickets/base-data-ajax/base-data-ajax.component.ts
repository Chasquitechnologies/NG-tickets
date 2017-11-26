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
import { TicketSummaryQuery } from '../../../../models/TicketSummaryQuery';

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
  public dateRangeSelected: Date[];


  public statusColor: object;
  public priorityColor: object;
  public querySelections: TicketSummaryQuery;


  constructor(private dropdownService: FilterDropDownService,
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
    };

    this.priorityColor = {
      'A++': { color: 'red', weight: 500 },
      A1: { color: '#575962', weight: 300 },
      A2: { color: '#575962', weight: 300 },
      A3: { color: '#575962', weight: 300 },
      B1: { color: '#575962', weight: 300 },
      B2: { color: '#575962', weight: 300 },
      B3: { color: '#575962', weight: 300 },
      C1: { color: '#575962', weight: 300 },
      C2: { color: '#575962', weight: 300 },
      C3: { color: '#575962', weight: 300 }
    };

    // retrieving last dropdown selection
    this.selectedBrand = this.dropdownService.getlastSelectedBrand();
    this.selectedStore = this.dropdownService.getlastSelectedStore();
    this.selectedFamily = this.dropdownService.getlastSelectedFamily();
    this.selectedPriority = this.dropdownService.getlastSelectedPriority();
    this.selectedStatus = this.dropdownService.getlastSelectedStatus();

    this.brandDropdown = this.dropdownService.getBrands();
    this.storeDropdown = this.dropdownService.getStores(this.selectedBrand.id);
    this.familyDropdown = this.dropdownService.getFamilies();
    this.priorityDropdown = this.dropdownService.getPriorities();
    this.statusDropdown = this.dropdownService.getStatus();
    this.dateRangeSelected = this.dropdownService.getlastSelectedDateRange();

    //needs to be modified to take in correct tickets
    this.adminTickets = this.adminTicketService.getAdminTickets(this.selectedBrand.id, this.selectedStore.id, this.selectedFamily.id, this.selectedPriority.id, this.selectedStatus, this.dateRangeSelected);

  }

  ngAfterViewInit() {

  }

  private passQuerySelectionsToMain(): void {
    // Passing Data to Main Component to recalculate Summary Data
    this.querySelections = {
      selectedBrand: this.selectedBrand,
      selectedStore: this.selectedStore,
      selectedFamily: this.selectedFamily,
      selectedPriority: this.selectedPriority,
      selectedStatus: this.selectedStatus,
      selectedDateRange: this.dateRangeSelected
    }
    this.dropdownService.modifyTicketSummaryQuery(this.querySelections)
  }

  onBrandChange(event): void {
    console.log(event);
    // Store selected brand locally and on service singleton(to be implemented)
    this.dropdownService.setlastSelectedBrand(this.selectedBrand);

    // filter store dropdon and select first store
    this.storeDropdown = this.dropdownService.getStores(parseInt(event.id))
    this.selectedStore = this.storeDropdown[0];

    // Passing Data to Main Component to recalculate Summary Data
    this.passQuerySelectionsToMain();

    //Updating tickets
    this.adminTickets = this.adminTicketService.getAdminTickets(this.selectedBrand.id, this.selectedStore.id, this.selectedFamily.id, this.selectedPriority.id, this.selectedStatus, this.dateRangeSelected);

  }

  onStoreChange(event): void {
    console.log(event);
    // TODO: Store selected brand on service singleton(to be implemented)
    this.dropdownService.setlastSelectedStore(this.selectedStore);

    // Passing Data to Main Component to recalculate Summary Data
    this.passQuerySelectionsToMain();

    //Updating tickets
    this.adminTickets = this.adminTicketService.getAdminTickets(this.selectedBrand.id, this.selectedStore.id, this.selectedFamily.id, this.selectedPriority.id, this.selectedStatus, this.dateRangeSelected);

  }

  onOtherDropdownChange(event): void {
    console.log(event);
    // TODO: Store selected Family, Priority & Status on service singleton(to be implemented)
    this.dropdownService.setlastSelectedFamily(this.selectedFamily);
    this.dropdownService.setlastSelectedPriority(this.selectedPriority);
    this.dropdownService.setlastSelectedStatus(this.selectedStatus);
    this.dropdownService.setlastSelectedDateRange(this.dateRangeSelected);

    // Passing Data to Main Component to recalculate Summary Data
    this.passQuerySelectionsToMain();

    //Updating tickets
    this.adminTickets = this.adminTicketService.getAdminTickets(this.selectedBrand.id, this.selectedStore.id, this.selectedFamily.id, this.selectedPriority.id, this.selectedStatus, this.dateRangeSelected);

  }


}
