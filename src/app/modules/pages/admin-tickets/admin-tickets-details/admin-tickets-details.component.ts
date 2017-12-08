import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Ticket } from '../../../../models/Ticket';
import { AdminTicketService } from '../../../../_services/admin-ticket-service.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/switchMap';
import { Status } from '../../../../models/Status';
import { FilterDropDownService } from '../../../../_services/filter-drop-down.service';
import { TechnicianType } from '../../../../models/TechnicianType';

@Component({
  selector: 'app-admin-tickets-details',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './admin-tickets-details.component.html',
  styleUrls: ['./admin-tickets-details.component.css']
})
export class AdminTicketsDetailsComponent implements OnInit {

  public ticketDetails$: Observable<Ticket>;
  private selectedId: number;
  public ticketDetails: Ticket;

  public nextStatusDropdown: Status[];
  public nextSelectedStatus: Status;

  // Need to change type of data
  public nextTecnicianTypeDropdown: TechnicianType[];
  public nextSelectedTecnicianType: TechnicianType

  // Need to change type of data
  public nextTechOrProviderNameDropdown: Observable<Status[]>;
  public nextTechOrProviderName: Status[]

  constructor(private route: ActivatedRoute, private adminTicketsService: AdminTicketService, private dropdownService: FilterDropDownService) {

  }


  ngOnInit() {


    this.ticketDetails$ = this.route.paramMap
      .switchMap((params: ParamMap) => {

        this.selectedId = +params.get('id');
        console.log('the selected ticket id is' + this.selectedId);

        this.getNextStatusOptions(this.selectedId);
        this.getTechnicianTypeOptions();

        return this.adminTicketsService.getAdminTicketDetails(this.selectedId);
      });

  }

  // ASYNCHRONOUSLY RETRIEVING STATUS DROPDOWN OPTIONS
  private getNextStatusOptions(ticketId:number): void {
    // retrieving status dropdown options asynchronously
    this.dropdownService.getNextStatus(this.selectedId).subscribe(
      data => {
        console.log(data);
        let filteredStatus: Status[] = data.filter(status => status.id === 0)
        if (!(typeof filteredStatus[0] != 'undefined')) {
          // Add "ALL selector if necessary"
          data.unshift({ id: 0, description: '--- Seleccionar ---' });
        }
        console.log(this.nextSelectedStatus);
        console.log(this.nextStatusDropdown);
        this.nextStatusDropdown = data
        this.nextSelectedStatus = data[0];
        
      },
      err => console.log(err),
      () => console.log('done retrieving status dropdown options')
    );
  }

  private getTechnicianTypeOptions():void{
      this.dropdownService.getTechnicianType().subscribe(
        data => {
          console.log(data);
          let filteredTechType: TechnicianType[] = data.filter(status => status.Id === 0)
          if (!(typeof filteredTechType[0] != 'undefined')) {
            // Add "ALL selector if necessary"
            data.unshift({ Id: 0, TechTypeName: '--- Seleccionar ---' });
          }
          this.nextTecnicianTypeDropdown = data
          this.nextSelectedTecnicianType = data[0];
          
        },
        err => console.log(err),
        () => console.log('done retrieving TechnicianType dropdown options')

      );
  }



}
