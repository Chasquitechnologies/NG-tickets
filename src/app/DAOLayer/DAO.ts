import { Ticket } from "../models/Ticket";
import { Brand } from "../models/Brand";
import { Store } from "../models/Store";
import { Family } from "../models/Family";
import { Priority } from "../models/Priority";
import { Status } from "../models/Status";
import { element } from "protractor";
import { TicketCountSummary } from "../models/TicketCountSummary";
import { Injectable } from "@angular/core";
import { IDAO } from "./IDAO";
import { Observable } from "rxjs/Observable";
import { HttpClient } from "@angular/common/http";
import { forEach } from "@angular/router/src/utils/collection";
import { TechnicianType } from "../models/TechnicianType";
import { TechnicianName } from "../models/TechnicianName";


@Injectable()
export class DAO {


    public testTickets: Ticket[];
    public testBrands: Brand[];
    public testStores: Store[];
    public testFamilies: Family[];
    public testPriorities: Priority[];
    public testStatus: Status[];

    constructor(private http: HttpClient) {
        
    }

    public getAllAdminTickets(brandId: number,
        storeId: number,
        familyId: number,
        priorityId: number,
        statusId: Status[],
        dateRangeSelected: Date[]): Observable<Ticket[]> {

        let query: string;
        query = '?'

        if (brandId != 0) {
            query += '&BrandId=' + brandId.toString();
        }
        if (storeId != 0) {
            query += '&BtoreId=' + storeId.toString();
        }
        if (familyId != 0) {
            query += '&FamilyId=' + familyId.toString();
        }
        if (priorityId != 0) {
            query += '&TicketPriorityId=' + priorityId.toString();
        }
        for (let status of statusId) {
            query += '&FlowStatusId=' + status.id.toString() 
        }

        return this.http.get<Ticket[]>('http://localhost:3000/tickets' + query);
    }


    public getAdminTicketDetails(ticketId: number):Observable<Ticket>{
        return this.http.get<Ticket>('http://localhost:3000/tickets?Id=' + ticketId.toString());
    }

    public getAdminTicketsSummaryCount(brandId: number,
        storeId: number,
        familyId: number,
        priorityId: number,
        statusId: Status[],
        dateRangeSelected: Date[]): TicketCountSummary {


        let filteredTickets: Ticket[];

        if (brandId == 0) {
            filteredTickets = this.testTickets;
        } else {
            filteredTickets = this.testTickets.filter(ticket => ticket.BrandId == brandId);
        }

        if (storeId == 0) {
            filteredTickets = filteredTickets;
        } else {
            filteredTickets = filteredTickets.filter(ticket => ticket.StoreId == storeId);
        }

        if (familyId == 0) {
            filteredTickets = filteredTickets;
        } else {
            filteredTickets = filteredTickets.filter(ticket => ticket.EquipmentFamilyId == familyId);
        }

        if (priorityId == 0) {
            filteredTickets = filteredTickets;
        } else {
            filteredTickets = filteredTickets.filter(ticket => ticket.TicketPriorityId == priorityId);
        }

        if (statusId) {
            let selectedStatus: number[] = statusId.map(status => status.id);
            filteredTickets = filteredTickets.filter(function (ticket) {
                return selectedStatus.indexOf(ticket.FlowStatusId) >= 0
            });
        } else {
            filteredTickets = filteredTickets;
        }

        let adminTicketsSummary: TicketCountSummary = {
            totalPriorityA: 0,
            totalPriorityB: 0,
            totalPriorityC: 0,
            totalPendingTickets: 0,
            percentPriorityA: 0,
            percentPriorityB: 0,
            percentPriorityC: 0
        };

        for (let ticket of filteredTickets) {
            if ((ticket.TicketPriorityId == 1 || ticket.TicketPriorityId == 2 || ticket.TicketPriorityId == 3 || ticket.TicketPriorityId == 4) &&
                (ticket.FlowStatusId == 1 || ticket.FlowStatusId == 12 || ticket.FlowStatusId == 2 || ticket.FlowStatusId == 13)) {
                adminTicketsSummary.totalPriorityA += 1
            }
            if ((ticket.TicketPriorityId == 5 || ticket.TicketPriorityId == 6 || ticket.TicketPriorityId == 7) &&
                (ticket.FlowStatusId == 1 || ticket.FlowStatusId == 12 || ticket.FlowStatusId == 2 || ticket.FlowStatusId == 13)) {
                adminTicketsSummary.totalPriorityB += 1
            }
            if ((ticket.TicketPriorityId == 8 || ticket.TicketPriorityId == 9 || ticket.TicketPriorityId == 10) &&
                (ticket.FlowStatusId == 1 || ticket.FlowStatusId == 12 || ticket.FlowStatusId == 2 || ticket.FlowStatusId == 13)) {
                adminTicketsSummary.totalPriorityC += 1
            }
        }

        adminTicketsSummary.totalPendingTickets = adminTicketsSummary.totalPriorityA + adminTicketsSummary.totalPriorityB + adminTicketsSummary.totalPriorityC

        return adminTicketsSummary;
    }



    public getNextStatus(ticketId: number): Observable<Status[]>{
        return this.http.get<Status[]>('http://localhost:3000/nextStatus?ticketId='+ ticketId.toString())
    };
    

    public getAllBrands(): Observable<Brand[]> {

        return this.http.get<Brand[]>('http://localhost:3000/brands');
    }

    public getAllStores(brandId: number): Observable<Store[]> {

        if (brandId == 0) {
            return this.http.get<Store[]>('http://localhost:3000/stores');
        } else {
            return this.http.get<Store[]>('http://localhost:3000/stores?brandId=' + brandId.toString());
        }
    }

    public getAllFamilies(): Observable<Family[]> {

        return this.http.get<Family[]>('http://localhost:3000/families');
    }

    public getAllPriorities(): Observable<Priority[]> {

        return this.http.get<Priority[]>('http://localhost:3000/priorities');
    }

    public getAllStatus(): Observable<Status[]> {

        return this.http.get<Status[]>('http://localhost:3000/status');
    }

    public getTechnicianType(): Observable<TechnicianType[]>{

        return  this.http.get<TechnicianType[]>('http://localhost:3000/technicianType')
    }

    public getTechnicianName (techTypeId:number, equipmentFamilyId: number, supportAdminId: number): Observable<TechnicianName[]>{

        return this.http.get<TechnicianName[]>('http://localhost:3000/technicianName?'+'equipmentFamilyId='+equipmentFamilyId.toString() +
                                                '&techTypeId='+techTypeId.toString() +
                                                '&supportAdminId=' + supportAdminId)
    }

}