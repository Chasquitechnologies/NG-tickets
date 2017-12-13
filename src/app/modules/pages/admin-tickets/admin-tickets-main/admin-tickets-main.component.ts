import { Component, OnInit, ViewEncapsulation } from '@angular/core';
// import { BaseDataAjaxComponent } from '../base-data-ajax/base-data-ajax.component';
import { FilterDropDownService } from '../../../../_services/filter-drop-down.service';
import { Subscription } from 'rxjs/Subscription';
import { AdminTicketService } from '../../../../_services/admin-ticket-service.service';
import { TicketCountSummary } from '../../../../models/TicketCountSummary';
import { Status } from '../../../../models/Status';

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
    this.adminTicketCountSummary = {    totalPendingTickets: 0,
      totalPriorityA: 0,
      totalPriorityB: 0,
      totalPriorityC: 0,
      percentPriorityA: 0,
      percentPriorityB: 0,
      percentPriorityC: 0

    };
    this.subscription = filterDropdownService.ticketSummaryQuery$.subscribe(
      ticketSummaryQuery => {
        console.log('on main component');
        console.log(ticketSummaryQuery);
        this.getAdminTicketsSummaryCount(ticketSummaryQuery.selectedBrand.id,
                                    ticketSummaryQuery.selectedStore.id,
                                    ticketSummaryQuery.selectedFamily.id,
                                    ticketSummaryQuery.selectedPriority.id,
                                    ticketSummaryQuery.selectedStatus,
                                    ticketSummaryQuery.selectedDateRange)
      });

  }

  private getAdminTicketsSummaryCount(brandId:number, storeId: number, familyId: number, priorityId: number, 
                                      selectedStatus:Status[],dateRangeSelected:Date[]): void{
        
        this.adminTicketService.getAdminTicketsSummaryCount(brandId, storeId, familyId, priorityId,
                                    selectedStatus, dateRangeSelected).subscribe(
                                        data => {
                                          console.log(data);
                                          this.adminTicketCountSummary = data;

                                        },
                                        err => console.log(err),
                                        () => console.log('done retrieving admin Ticket Summary Count')
                                    );     
  }

  ngOnInit() {
    this.show = false;
    this.getAdminTicketsSummaryCount(this.filterDropdownService.getlastSelectedBrand().id,
                                    this.filterDropdownService.getlastSelectedStore().id,
                                    this.filterDropdownService.getlastSelectedFamily().id,
                                    this.filterDropdownService.getlastSelectedPriority().id,
                                    this.filterDropdownService.getlastSelectedStatus(),
                                    this.filterDropdownService.getlastSelectedDateRange());
  }

}

