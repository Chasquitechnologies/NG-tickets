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
        this.testTickets = [
            {
                id: 1, globalTicketId: 'T-001', statusId: 1, statusDescription: 'Ingresado', brandId: 1, brandDescription: 'Bembos',
                storeId: 1, storeDescription: 'BB - Aurora', priorityId: 1, priorityDescitpiont: 'A++', classificationId: 1, classificationDescription: 'Equipos',
                familyId: 1, familyDescription: 'Family 1', equipmentId: 1000, equipmentDescription: 'Nombre de Equipo 1',
                failTypeId: 1, failTypeDescription: 'Total', supportAdminId: 1, supportAdminDescription: 'Support Admin 1'
            },

            {
                id: 2, globalTicketId: 'T-002', statusId: 12, statusDescription: 'Asignado', brandId: 1, brandDescription: 'Bembos',
                storeId: 2, storeDescription: 'BB - Plaza San Miguel', priorityId: 1, priorityDescitpiont: 'A++', classificationId: 1, classificationDescription: 'Equipos',
                familyId: 1, familyDescription: 'Family 1', equipmentId: 1000, equipmentDescription: 'Nombre de Equipo 2',
                failTypeId: 1, failTypeDescription: 'Total', supportAdminId: 1, supportAdminDescription: 'Support Admin 1'
            },

            {
                id: 3, globalTicketId: 'T-003', statusId: 2, statusDescription: 'Programado', brandId: 1, brandDescription: 'Bembos',
                storeId: 3, storeDescription: 'BB - Regatas', priorityId: 1, priorityDescitpiont: 'A++', classificationId: 1, classificationDescription: 'Equipos',
                familyId: 1, familyDescription: 'Family 1', equipmentId: 1000, equipmentDescription: 'Nombre de Equipo 3',
                failTypeId: 1, failTypeDescription: 'Total', supportAdminId: 1, supportAdminDescription: 'Support Admin 1'
            },

            {
                id: 4, globalTicketId: 'T-004', statusId: 3, statusDescription: 'Atendido', brandId: 3, brandDescription: 'Don Belisario',
                storeId: 11, storeDescription: 'DB - Store 3', priorityId: 2, priorityDescitpiont: 'A1', classificationId: 1, classificationDescription: 'Equipos',
                familyId: 2, familyDescription: 'Family 2', equipmentId: 1000, equipmentDescription: 'Nombre de Equipo 4',
                failTypeId: 1, failTypeDescription: 'Total', supportAdminId: 1, supportAdminDescription: 'Support Admin 1'
            },

            {
                id: 5, globalTicketId: 'T-005', statusId: 4, statusDescription: 'Confirmado', brandId: 4, brandDescription: "Dunkin' Donuts",
                storeId: 14, storeDescription: 'DD - Modulo Plaza Vea El Cortijo (6149)', priorityId: 2, priorityDescitpiont: 'A1', classificationId: 1, classificationDescription: 'Equipos',
                familyId: 2, familyDescription: 'Family 2', equipmentId: 1000, equipmentDescription: 'Nombre de Equipo 5',
                failTypeId: 1, failTypeDescription: 'Total', supportAdminId: 1, supportAdminDescription: 'Support Admin 1'
            },

            {
                id: 6, globalTicketId: 'T-006', statusId: 5, statusDescription: 'Anulado', brandId: 5, brandDescription: 'Papa Johns',
                storeId: 16, storeDescription: 'PJ - Store 2', priorityId: 2, priorityDescitpiont: 'A1', classificationId: 1, classificationDescription: 'Equipos',
                familyId: 3, familyDescription: 'Family 3', equipmentId: 1000, equipmentDescription: 'Nombre de Equipo 6',
                failTypeId: 1, failTypeDescription: 'Total', supportAdminId: 1, supportAdminDescription: 'Support Admin 1'
            },

            {
                id: 7, globalTicketId: 'T-007', statusId: 13, statusDescription: 'Reactivado', brandId: 6, brandDescription: 'Popeyes',
                storeId: 20, storeDescription: 'PP - Store 3', priorityId: 6, priorityDescitpiont: 'B2', classificationId: 1, classificationDescription: 'Equipos',
                familyId: 3, familyDescription: 'Family 3', equipmentId: 1000, equipmentDescription: 'Nombre de Equipo 7',
                failTypeId: 1, failTypeDescription: 'Total', supportAdminId: 1, supportAdminDescription: 'Support Admin 1'
            },

            {
                id: 8, globalTicketId: 'T-008', statusId: 4, statusDescription: 'Confirmado', brandId: 6, brandDescription: 'Popeyes',
                storeId: 20, storeDescription: 'PP - Store 3', priorityId: 6, priorityDescitpiont: 'B2', classificationId: 1, classificationDescription: 'Equipos',
                familyId: 2, familyDescription: 'Family 2', equipmentId: 1000, equipmentDescription: 'Nombre de Equipo 7',
                failTypeId: 1, failTypeDescription: 'Total', supportAdminId: 1, supportAdminDescription: 'Support Admin 1'
            },

            {
                id: 9, globalTicketId: 'T-009', statusId: 4, statusDescription: 'Confirmado', brandId: 6, brandDescription: 'Popeyes',
                storeId: 20, storeDescription: 'PP - Store 3', priorityId: 3, priorityDescitpiont: 'A2', classificationId: 1, classificationDescription: 'Equipos',
                familyId: 2, familyDescription: 'Family 2', equipmentId: 1000, equipmentDescription: 'Nombre de Equipo 7',
                failTypeId: 1, failTypeDescription: 'Total', supportAdminId: 1, supportAdminDescription: 'Support Admin 1'
            },

            {
                id: 10, globalTicketId: 'T-010', statusId: 4, statusDescription: 'Confirmado', brandId: 6, brandDescription: 'Popeyes',
                storeId: 20, storeDescription: 'PP - Store 3', priorityId: 3, priorityDescitpiont: 'A2', classificationId: 1, classificationDescription: 'Equipos',
                familyId: 2, familyDescription: 'Family 2', equipmentId: 1000, equipmentDescription: 'Nombre de Equipo 7',
                failTypeId: 1, failTypeDescription: 'Total', supportAdminId: 1, supportAdminDescription: 'Support Admin 1'
            },

            {
                id: 11, globalTicketId: 'T-011', statusId: 3, statusDescription: 'Atendido', brandId: 6, brandDescription: 'Popeyes',
                storeId: 20, storeDescription: 'PP - Store 3', priorityId: 3, priorityDescitpiont: 'A2', classificationId: 1, classificationDescription: 'Equipos',
                familyId: 1, familyDescription: 'Family 1', equipmentId: 1000, equipmentDescription: 'Nombre de Equipo 7',
                failTypeId: 1, failTypeDescription: 'Total', supportAdminId: 1, supportAdminDescription: 'Support Admin 1'
            },

            {
                id: 12, globalTicketId: 'T-012', statusId: 3, statusDescription: 'Atendido', brandId: 6, brandDescription: 'Popeyes',
                storeId: 20, storeDescription: 'PP - Store 3', priorityId: 8, priorityDescitpiont: 'C1', classificationId: 1, classificationDescription: 'Equipos',
                familyId: 1, familyDescription: 'Family 1', equipmentId: 1000, equipmentDescription: 'Nombre de Equipo 7',
                failTypeId: 1, failTypeDescription: 'Total', supportAdminId: 1, supportAdminDescription: 'Support Admin 1'
            },

            {
                id: 13, globalTicketId: 'T-003', statusId: 3, statusDescription: 'Atendido', brandId: 6, brandDescription: 'Popeyes',
                storeId: 20, storeDescription: 'PP - Store 3', priorityId: 8, priorityDescitpiont: 'C1', classificationId: 1, classificationDescription: 'Equipos',
                familyId: 1, familyDescription: 'Family 1', equipmentId: 1000, equipmentDescription: 'Nombre de Equipo 7',
                failTypeId: 1, failTypeDescription: 'Total', supportAdminId: 1, supportAdminDescription: 'Support Admin 1'
            },

            {
                id: 14, globalTicketId: 'T-014', statusId: 2, statusDescription: 'Programado', brandId: 6, brandDescription: 'Popeyes',
                storeId: 20, storeDescription: 'PP - Store 3', priorityId: 8, priorityDescitpiont: 'C1', classificationId: 1, classificationDescription: 'Equipos',
                familyId: 2, familyDescription: 'Family 2', equipmentId: 1000, equipmentDescription: 'Nombre de Equipo 7',
                failTypeId: 1, failTypeDescription: 'Total', supportAdminId: 1, supportAdminDescription: 'Support Admin 1'
            },

            {
                id: 15, globalTicketId: 'T-015', statusId: 2, statusDescription: 'Programado', brandId: 6, brandDescription: 'Popeyes',
                storeId: 20, storeDescription: 'PP - Store 3', priorityId: 8, priorityDescitpiont: 'C1', classificationId: 1, classificationDescription: 'Equipos',
                familyId: 1, familyDescription: 'Family 1', equipmentId: 1000, equipmentDescription: 'Nombre de Equipo 7',
                failTypeId: 1, failTypeDescription: 'Total', supportAdminId: 1, supportAdminDescription: 'Support Admin 1'
            },

            {
                id: 16, globalTicketId: 'T-016', statusId: 1, statusDescription: 'Ingresado', brandId: 6, brandDescription: 'Popeyes',
                storeId: 20, storeDescription: 'PP - Store 3', priorityId: 10, priorityDescitpiont: 'C3', classificationId: 1, classificationDescription: 'Equipos',
                familyId: 3, familyDescription: 'Family 3', equipmentId: 1000, equipmentDescription: 'Nombre de Equipo 7',
                failTypeId: 1, failTypeDescription: 'Total', supportAdminId: 1, supportAdminDescription: 'Support Admin 1'
            }

        ];

    }

    public getAllAdminTicketsReplacement(brandId: number,
        storeId: number,
        familyId: number,
        priorityId: number,
        statusId: Status[],
        dateRangeSelected: Date[]): Ticket[] {


        let filteredTickets: Ticket[];

        if (brandId == 0) {
            filteredTickets = this.testTickets;
        } else {
            filteredTickets = this.testTickets.filter(ticket => ticket.brandId == brandId);
        }

        if (storeId == 0) {
            filteredTickets = filteredTickets;
        } else {
            filteredTickets = filteredTickets.filter(ticket => ticket.storeId == storeId);
        }

        if (familyId == 0) {
            filteredTickets = filteredTickets;
        } else {
            filteredTickets = filteredTickets.filter(ticket => ticket.familyId == familyId);
        }

        if (priorityId == 0) {
            filteredTickets = filteredTickets;
        } else {
            filteredTickets = filteredTickets.filter(ticket => ticket.priorityId == priorityId);
        }

        if (statusId) {
            let selectedStatus: number[] = statusId.map(status => status.id);
            filteredTickets = filteredTickets.filter(function (ticket) {
                return selectedStatus.indexOf(ticket.statusId) >= 0
            });
        } else {
            filteredTickets = filteredTickets;
        }


        return filteredTickets;
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
            query += '&brandId=' + brandId.toString();
        }

        if (storeId != 0) {

            query += '&storeId=' + storeId.toString();
        }

        if (familyId != 0) {
            query += '&familyId=' + familyId.toString();
        }

        if (priorityId != 0) {
            query += '&priorityId=' + priorityId.toString();
        }


        // let selectedStatus: number[] = statusId.map(status => status.id);
        for (let status of statusId) {
            query += '&statusId=' + status.id.toString() 
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
            filteredTickets = this.testTickets.filter(ticket => ticket.brandId == brandId);
        }

        if (storeId == 0) {
            filteredTickets = filteredTickets;
        } else {
            filteredTickets = filteredTickets.filter(ticket => ticket.storeId == storeId);
        }

        if (familyId == 0) {
            filteredTickets = filteredTickets;
        } else {
            filteredTickets = filteredTickets.filter(ticket => ticket.familyId == familyId);
        }

        if (priorityId == 0) {
            filteredTickets = filteredTickets;
        } else {
            filteredTickets = filteredTickets.filter(ticket => ticket.priorityId == priorityId);
        }

        if (statusId) {
            let selectedStatus: number[] = statusId.map(status => status.id);
            filteredTickets = filteredTickets.filter(function (ticket) {
                return selectedStatus.indexOf(ticket.statusId) >= 0
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
            if ((ticket.priorityId == 1 || ticket.priorityId == 2 || ticket.priorityId == 3 || ticket.priorityId == 4) &&
                (ticket.statusId == 1 || ticket.statusId == 12 || ticket.statusId == 2 || ticket.statusId == 13)) {
                adminTicketsSummary.totalPriorityA += 1
            }
            if ((ticket.priorityId == 5 || ticket.priorityId == 6 || ticket.priorityId == 7) &&
                (ticket.statusId == 1 || ticket.statusId == 12 || ticket.statusId == 2 || ticket.statusId == 13)) {
                adminTicketsSummary.totalPriorityB += 1
            }
            if ((ticket.priorityId == 8 || ticket.priorityId == 9 || ticket.priorityId == 10) &&
                (ticket.statusId == 1 || ticket.statusId == 12 || ticket.statusId == 2 || ticket.statusId == 13)) {
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