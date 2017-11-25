import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import { Ticket } from '../models/Ticket';
import { DAOmockup } from '../mockupData/DAOmockup';
import { Status } from '../models/Status';


@Injectable()
export class AdminTicketService {

  //delete if not on production build
  public DAO: DAOmockup = new DAOmockup();

  constructor(private http: Http) { 
    
    
  }

  getAdminTickets(brandId:number,
                  storeId:number,
                  familyId:number,
                  priorityId:number,
                  statusId:Status[],
                  dateRangeSelected:Date[]):Ticket[] {
    
    // return this.http.get('https://www.primefaces.org/primeng/assets/showcase/data/cars-small.json')
    //             .toPromise()
    //             .then(res => <Car[]> res.json().data)
    //             .then(data => { return data; });

    let adminTickets:Ticket[] = this.DAO.getAllAdminTickets(brandId,storeId, familyId, priorityId, statusId, dateRangeSelected);


    return adminTickets
  }

}
