import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Ticket } from '../models/Ticket';
import { DAOmockup } from '../DAOLayer/DAOmockup';
import { Status } from '../models/Status';
import { TicketCountSummary } from '../models/TicketCountSummary';
import { IDAO } from '../DAOLayer/IDAO';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class AdminTicketService {

  //delete if not on production build
  //public DAO: DAOmockup = new DAOmockup();

  constructor(private http: Http, private DAO: IDAO) {


  }

  getAdminTickets(brandId: number,
    storeId: number,
    familyId: number,
    priorityId: number,
    statusId: Status[],
    dateRangeSelected: Date[]): Observable<Ticket[]> {

    return this.DAO.getAllAdminTickets(brandId, storeId, familyId, priorityId, statusId, dateRangeSelected);

  }

  getAdminTicketsSummaryCount(brandId: number,
    storeId: number,
    familyId: number,
    priorityId: number,
    statusId: Status[],
    dateRangeSelected: Date[]): TicketCountSummary {

    let ticketCountSummary: TicketCountSummary = this.DAO.getAdminTicketsSummaryCount(brandId, storeId, familyId, priorityId, statusId, dateRangeSelected);


    return ticketCountSummary;
  }

  getAdminTicketDetails(ticketId:number): Observable<Ticket>
  {

    return this.DAO.getAdminTicketDetails(ticketId);
  }

}
