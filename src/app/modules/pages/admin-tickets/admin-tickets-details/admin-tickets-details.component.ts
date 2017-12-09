import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Ticket } from '../../../../models/Ticket';
import { AdminTicketService } from '../../../../_services/admin-ticket-service.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/switchMap';
import { Status } from '../../../../models/Status';
import { FilterDropDownService } from '../../../../_services/filter-drop-down.service';
import { TechnicianType } from '../../../../models/TechnicianType';
import { TechnicianName } from '../../../../models/TechnicianName';

@Component({
  selector: 'app-admin-tickets-details',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './admin-tickets-details.component.html',
  styleUrls: ['./admin-tickets-details.component.css']
})
export class AdminTicketsDetailsComponent implements OnInit {

  // observable for ticketdetails route parameter
  public ticketDetails$: Observable<Ticket>;
  public ticketDetails: Ticket
  public comments: Comment[];
  private selectedId: number;

  // Variables for status Dropdown
  public nextStatusDropdown: Status[];
  public nextSelectedStatus: Status;

  // Variables for technician type Dropdown
  public nextTecnicianTypeDropdown: TechnicianType[];
  public nextSelectedTecnicianType: TechnicianType

  // Variables for provider or tech name Dropdown
  public nextTechOrProviderNameDropdown: TechnicianName[];
  public nextTechOrProviderName: TechnicianName;

  constructor(private route: ActivatedRoute, private adminTicketsService: AdminTicketService, private dropdownService: FilterDropDownService) {

  }


  ngOnInit() {


    this.ticketDetails$ = this.route.paramMap
      .switchMap((params: ParamMap) => {

        this.selectedId = +params.get('id');
        console.log('the selected ticket id is' + this.selectedId);

        return this.adminTicketsService.getAdminTicketDetails(this.selectedId);
      });

    this.ticketDetails$.subscribe(
      data => {
        this.ticketDetails = data;
        this.comments = this.ticketDetails[0].Comments;
        console.log('commentInfo');
        console.log(this.ticketDetails[0].Comments);
        console.log(this.comments);
        this.getNextStatusOptions(this.selectedId);
        this.getTechnicianTypeOptions();

        this.getTechnicianNameOptions(0, 0, 0);

      }
    )

  }

  onTechnicianTypeOptionsChange(event) {
    console.log('heloooooo')
    this.getTechnicianNameOptions(this.nextSelectedTecnicianType.Id,
      this.ticketDetails[0].EquipmentFamilyId,
      this.ticketDetails[0].SupportAdminId);

  }

  //ASYNC CALLS TO RETRIEVE TICKET DETAILS

  // ASYNCHRONOUSLY RETRIEVING STATUS DROPDOWN OPTIONS
  private getNextStatusOptions(ticketId: number): void {
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

  // ASYNCHRONOUSLY RETRIEVING TECHNICIANTYPE DROPDOWN OPTIONS
  private getTechnicianTypeOptions(): void {
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

  // ASYNCHRONOUSLY RETRIEVING TECHNICIAN NAME DROPDOWN OPTIONS
  private getTechnicianNameOptions(techTypeId: number, equipmentFamilyId: number, supportAdminId: number): void {
    console.log('hi in here')
    console.log(techTypeId);
    console.log(equipmentFamilyId);
    console.log(supportAdminId);
    this.dropdownService.getTechnicianName(techTypeId, equipmentFamilyId, supportAdminId).subscribe(
      data => {
        console.log(data);
        let filteredTechName: TechnicianName[] = data.filter(techName => techName.Id === 0);
        if (!(typeof filteredTechName[0] != 'undefined')) {
          // Add "ALL selector if necessary"
          data.unshift({ Id: 0, Name: '--- Seleccionar ---' });
        }
        this.nextTechOrProviderNameDropdown = data;
        this.nextTechOrProviderName = data[0];

      },
      err => console.log(err),
      () => console.log('done retrieving TechnicianName dropdown options')

    );
  }



}
