import { Component, OnInit, ViewEncapsulation } from '@angular/core';
// import { BaseDataAjaxComponent } from '../base-data-ajax/base-data-ajax.component';
import { FilterDropDownService } from '../../../../_services/filter-drop-down.service';
import { Subscription } from 'rxjs/Subscription';
import { AdminTicketService } from '../../../../_services/admin-ticket-service.service';
import { TicketCountSummary } from '../../../../models/TicketCountSummary';

@Component({
  selector: '.m-grid__item.m-grid__item--fluid.m-wrapper',
  templateUrl: './admin-tickets-main.component.html',
  styleUrls: ['./admin-tickets-main.component.css'],
  encapsulation: ViewEncapsulation.None
})

export class AdminTicketsMainComponent implements OnInit {

  public show: boolean;
  public adminTicketCountSummary: TicketCountSummary
  
  private subscription: Subscription;
  
  
  constructor(private filterDropdownService: FilterDropDownService, private adminTicketService: AdminTicketService) { 
    this.subscription = filterDropdownService.ticketSummaryQuery$.subscribe(
      ticketSummaryQuery => {
        console.log('on main component');
        console.log(ticketSummaryQuery);
        this.adminTicketCountSummary=adminTicketService.getAdminTicketsSummaryCount(ticketSummaryQuery.selectedBrand.id,
                                                        ticketSummaryQuery.selectedStore.id,
                                                        ticketSummaryQuery.selectedFamily.id,
                                                        ticketSummaryQuery.selectedPriority.id,
                                                        ticketSummaryQuery.selectedStatus,
                                                        ticketSummaryQuery.selectedDateRange);
        console.log(this.adminTicketCountSummary);
    });

  }

  ngOnInit() {
    this.show=false;
    this.adminTicketCountSummary=this.adminTicketService.getAdminTicketsSummaryCount(
      this.filterDropdownService.getlastSelectedBrand().id,
      this.filterDropdownService.getlastSelectedStore().id,
      this.filterDropdownService.getlastSelectedFamily().id,
      this.filterDropdownService.getlastSelectedPriority().id,
      this.filterDropdownService.getlastSelectedStatus(),
      this.filterDropdownService.getlastSelectedDateRange());
  }

}

