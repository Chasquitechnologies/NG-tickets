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


@Injectable()
export class DAOmockup implements IDAO {


    public testTickets: Ticket[];
    public testBrands: Brand[];
    public testStores: Store[];
    public testFamilies: Family[];
    public testPriorities: Priority[];
    public testStatus: Status[];

    constructor(private http: HttpClient) {
        this.testTickets =[
            {
              "Id": 27904,
              "GlobalTicketId": "T0027904",
              "FlowStatusId": 4,
              "Status": "Confirmado",
              "BrandId": 2,
              "Brand": "China Wok",
              "StoreId": 127,
              "Store": "CW - OP Angamos",
              "CostCenterId": 405,
              "CostCenter": null,
              "AffectPeople": false,
              "AffectStore": false,
              "IsHighPriority": false,
              "PriorityDisplay": "C1",
              "EquipmentId": 2,
              "Classification": "INFRAESTRUCTURA",
              "EquipmentFamilyId": 5,
              "EquipmentFamily": "EDIFICACIÓN Y ESTRUCTURAS",
              "EquipmentDetailId": 4435,
              "EquipmentDetail": "TRABAJO EN PAREDES",
              "EquipmentDetailCode": "CWI0027",
              "FailTypeId": 1,
              "FailureType": "Total",
              "TicketPriorityId": 8,
              "TicketPriority": "C1",
              "Comments": null,
              "User": "marsano.chwk@ngr.com.pe",
              "CreatedOnDisplay": "29/11/2017 07:59 PM",
              "CreatedBy": "0c186f77-5d32-49a5-b6c1-959b9341347f",
              "SupportAdminId": 0,
              "SupportAdminName": "Alejandro Rodriguez",
              "SupportAdminEmail": "alejandro.rodriguez@ngr.com.pe",
              "TechnicianId": 0,
              "ProviderId": 0,
              "TechnicianType": "Técnico NGR",
              "TechnicianTypeId": 1,
              "AssignedDateDisplay": " ",
              "ProgrammedDateDisplay": " ",
              "AtendidoDateDisplay": " ",
              "ConfirmationDateDisplay": "29/11/2017 08:12 PM",
              "AnuladoDateDisplay": " ",
              "ReactivadoDateDisplay": " "
            },
            {
              "Id": 27903,
              "GlobalTicketId": "T0027903",
              "FlowStatusId": 4,
              "Status": "Confirmado",
              "BrandId": 2,
              "Brand": "China Wok",
              "StoreId": 127,
              "Store": "CW - OP Angamos",
              "CostCenterId": 405,
              "CostCenter": null,
              "AffectPeople": false,
              "AffectStore": false,
              "IsHighPriority": false,
              "PriorityDisplay": "C1",
              "EquipmentId": 2,
              "Classification": "INFRAESTRUCTURA",
              "EquipmentFamilyId": 5,
              "EquipmentFamily": "EDIFICACIÓN Y ESTRUCTURAS",
              "EquipmentDetailId": 4435,
              "EquipmentDetail": "TRABAJO EN PAREDES",
              "EquipmentDetailCode": "CWI0027",
              "FailTypeId": 1,
              "FailureType": "Total",
              "TicketPriorityId": 8,
              "TicketPriority": "C1",
              "Comments": null,
              "User": "marsano.chwk@ngr.com.pe",
              "CreatedOnDisplay": "29/11/2017 07:57 PM",
              "CreatedBy": "0c186f77-5d32-49a5-b6c1-959b9341347f",
              "SupportAdminId": 0,
              "SupportAdminName": "Alejandro Rodriguez",
              "SupportAdminEmail": "alejandro.rodriguez@ngr.com.pe",
              "TechnicianId": 0,
              "ProviderId": 0,
              "TechnicianType": "Técnico NGR",
              "TechnicianTypeId": 1,
              "AssignedDateDisplay": " ",
              "ProgrammedDateDisplay": " ",
              "AtendidoDateDisplay": " ",
              "ConfirmationDateDisplay": "29/11/2017 08:12 PM",
              "AnuladoDateDisplay": " ",
              "ReactivadoDateDisplay": " "
            },
            {
              "Id": 27902,
              "GlobalTicketId": "T0027902",
              "FlowStatusId": 1,
              "Status": "Ingresado",
              "BrandId": 2,
              "Brand": "China Wok",
              "StoreId": 127,
              "Store": "CW - OP Angamos",
              "CostCenterId": 405,
              "CostCenter": null,
              "AffectPeople": false,
              "AffectStore": false,
              "IsHighPriority": false,
              "PriorityDisplay": "C1",
              "EquipmentId": 2,
              "Classification": "INFRAESTRUCTURA",
              "EquipmentFamilyId": 5,
              "EquipmentFamily": "EDIFICACIÓN Y ESTRUCTURAS",
              "EquipmentDetailId": 4440,
              "EquipmentDetail": "VENTANA",
              "EquipmentDetailCode": "CWI0032",
              "FailTypeId": 1,
              "FailureType": "Total",
              "TicketPriorityId": 8,
              "TicketPriority": "C1",
              "Comments": null,
              "User": "marsano.chwk@ngr.com.pe",
              "CreatedOnDisplay": "29/11/2017 07:55 PM",
              "CreatedBy": "0c186f77-5d32-49a5-b6c1-959b9341347f",
              "SupportAdminId": 0,
              "SupportAdminName": "Alejandro Rodriguez",
              "SupportAdminEmail": "alejandro.rodriguez@ngr.com.pe",
              "TechnicianId": 0,
              "ProviderId": 0,
              "TechnicianType": "Técnico NGR",
              "TechnicianTypeId": 1,
              "AssignedDateDisplay": " ",
              "ProgrammedDateDisplay": " ",
              "AtendidoDateDisplay": " ",
              "ConfirmationDateDisplay": " ",
              "AnuladoDateDisplay": " ",
              "ReactivadoDateDisplay": " ",
            }
          ]
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

        return this.http.get<Ticket[]>('http://localhost:3004/tickets' + query);
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




    public getAllBrands(): Observable<Brand[]> {

        return this.http.get<Brand[]>('http://localhost:3004/brands');
    }

    public getAllStores(brandId: number): Observable<Store[]> {

        if (brandId == 0) {
            return this.http.get<Store[]>('http://localhost:3004/stores');
        } else {
            return this.http.get<Store[]>('http://localhost:3004/stores?brandId=' + brandId.toString());
        }
    }

    public getAllFamilies(): Observable<Family[]> {

        return this.http.get<Family[]>('http://localhost:3004/families');
    }

    public getAllPriorities(): Observable<Priority[]> {

        return this.http.get<Priority[]>('http://localhost:3004/priorities');
    }

    public getAllStatus(): Observable<Status[]> {

        return this.http.get<Status[]>('http://localhost:3004/status');
    }

}