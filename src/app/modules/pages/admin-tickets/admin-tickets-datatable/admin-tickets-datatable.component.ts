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
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';


// declare var jquery: any;
// declare var $: any;

@Component({
  templateUrl: "./admin-tickets-datatable.component.html",
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./admin-tickets-datatable.component.css']
})

export class AdminTicketsDatatableComponent implements OnInit {

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
    private adminTicketService: AdminTicketService, private router: Router, private route: ActivatedRoute ) {

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

    // must eventually delete following lines and implement server side color schema
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
    this.dateRangeSelected = this.dropdownService.getlastSelectedDateRange();

    // GETTING DATA TO INITIALIZE DROPDOWNS ASYNCHRONOUSLY
    this.getBrandOptions();
    this.getStoreOptions(this.selectedBrand.id);
    this.getFamilyOptions();
    this.getPriorityOptions();
    this.getStatusOptions();

    //needs to be modified to take in correct tickets
    this.getTickets(this.selectedBrand.id, this.selectedStore.id, this.selectedFamily.id, this.selectedPriority.id, this.selectedStatus, this.dateRangeSelected);

  }

  ngAfterViewInit() {

  }

  onBrandChange(event): void {
    console.log('brand change event')
    console.log(event);
    // Store selected brand locally and on service singleton(to be implemented)
    this.dropdownService.setlastSelectedBrand(this.selectedBrand);

    // filter store dropdon and select first store
    this.getStoreOptions(parseInt(event.id));

    // this line here may cause issues. DO NOT INPUT THIS LINE INSIDE ASYNC CALL OR IT WILL AFFECT THE BEHAVIOR WHEN CHANGING PAGES AND STORES WILL
    // GET RESTARTED TO 0. THIS WILL WORK AS LONG AS STORE DROPDOWN ALWAYS HAVE A 0-ALL 
    this.selectedStore = this.storeDropdown[0];

    // Passing Data to Main Component to recalculate Summary Data
    this.passQuerySelectionsToMain();

    //Updating tickets
    this.getTickets(this.selectedBrand.id, this.selectedStore.id, this.selectedFamily.id, this.selectedPriority.id, this.selectedStatus, this.dateRangeSelected);
  }

  onStoreChange(event): void {
    console.log(event);
    // TODO: Store selected brand on service singleton(to be implemented)
    this.dropdownService.setlastSelectedStore(this.selectedStore);

    // Passing Data to Main Component to recalculate Summary Data
    this.passQuerySelectionsToMain();

    //Updating tickets
    this.getTickets(this.selectedBrand.id, this.selectedStore.id, this.selectedFamily.id, this.selectedPriority.id, this.selectedStatus, this.dateRangeSelected);

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
    this.getTickets(this.selectedBrand.id, this.selectedStore.id, this.selectedFamily.id, this.selectedPriority.id, this.selectedStatus, this.dateRangeSelected);
  }


  onRowSelect(event) {
    console.log(event)
    console.log(event.data.Id);
    this.router.navigate(['detail',{id: event.data.Id}], { relativeTo: this.route });
  }

  //<<<<<<<-----------------  HELPER FUNCTIONS!!!! -------------------------------------->>>>>>>

  // ASYNCHRONOUSLY RETRIEVING BRAND DROPDOWN OPTIONS
  private getBrandOptions(): void {
    // retrieving brand dropdown options asynchronously
    this.dropdownService.getBrands().subscribe(
      data => {
        console.log(data);
        this.brandDropdown = data;

      },
      err => console.log(err),
      () => console.log('done retrieving brands dropdown options')
    );

  }

  // ASYNCHRONOUSLY RETRIEVING STORE DROPDOWN OPTIONS
  private getStoreOptions(brandId:number): void {
    // retrieving store dropdown options asynchronously
    this.dropdownService.getStores(brandId).subscribe(
      data => {
        let filteredStores: Store[] = data.filter(
          store => store.brandId === 0);
        if (!(typeof filteredStores[0] != 'undefined')) {
          // Add "ALL selector if necessary"
          data.unshift({ id: 0, brandId: 0, description: 'All' });
        }
        this.storeDropdown = data;
      },
      err => console.log(err),
      () => console.log('done retrieving stores dropdown options')
    );
  }

  // ASYNCHRONOUSLY RETRIEVING FAMILY DROPDOWN OPTIONS
  private getFamilyOptions(): void {
    // retrieving family dropdown options asynchronously
    this.dropdownService.getFamilies().subscribe(
      data => {
        console.log(data);
        this.familyDropdown = data;
      },
      err => console.log(err),
      () => console.log('done retrieving family dropdown options')
    );

  }

  // ASYNCHRONOUSLY RETRIEVING PRIORITY DROPDOWN OPTIONS
  private getPriorityOptions(): void {
    // retrieving priority dropdown options asynchronously
    this.dropdownService.getPriorities().subscribe(
      data => {
        console.log(data);
        this.priorityDropdown = data;
      },
      err => console.log(err),
      () => console.log('done retrieving priority dropdown options')
    );

  }

    // ASYNCHRONOUSLY RETRIEVING STATUS DROPDOWN OPTIONS
    private getStatusOptions(): void {
      // retrieving status dropdown options asynchronously
      this.dropdownService.getStatus().subscribe(
        data => {
          console.log(data);
          this.statusDropdown = data;
        },
        err => console.log(err),
        () => console.log('done retrieving status dropdown options')
      );
  
    }

    // ASYNCHRONOUSLY RETRIEVING TICKETS
    private getTickets(brandId:number, storeId:number, familyId: number, priorityId:number,selectedStatus:Status[],dateRangeSelected:Date[]): void {
      // retrieving stickets asynchronously
      this.adminTicketService.getAdminTickets(brandId, storeId, familyId, priorityId, selectedStatus, dateRangeSelected).subscribe(
        data => {
          console.log(data);
          this.adminTickets = data;
        },
        err => console.log(err),
        () => console.log('done retrieving tickets')
      );
  
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


}
