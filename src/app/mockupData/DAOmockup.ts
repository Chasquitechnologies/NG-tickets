import { Ticket } from "../models/Ticket";
import { Brand } from "../models/Brand";
import { Store } from "../models/Store";
import { Family } from "../models/Family";
import { Priority } from "../models/Priority";
import { Status } from "../models/Status";
import { element } from "protractor";



export class DAOmockup {


    public testTickets: Ticket[];
    public testBrands: Brand[];
    public testStores: Store[];
    public testFamilies: Family[];
    public testPriorities: Priority[];
    public testStatus: Status[];

    constructor() {
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

        this.testBrands = [
            { id: 0, name: "All" },
            { id: 1, name: "Bembos" },
            { id: 2, name: "China Wok" },
            { id: 3, name: "Don Belisario" },
            { id: 4, name: "Dunkin' Donuts" },
            { id: 5, name: "Papa John's" },
            { id: 6, name: "Popeyes" }
        ];

        this.testStores = [
            { id: 0, brandId: 0, name: "All" },
            { id: 1, brandId: 1, name: "BB - Aurora" },
            { id: 2, brandId: 1, name: "BB - Plaza San Miguel" },
            { id: 3, brandId: 1, name: "BB - Regatas" },
            { id: 6, brandId: 2, name: "CW - Store 1" },
            { id: 7, brandId: 2, name: "CW - Store 2" },
            { id: 7, brandId: 2, name: "CW - Store 3" },
            { id: 7, brandId: 3, name: "DB - Store 1" },
            { id: 7, brandId: 3, name: "DB - Store 2" },
            { id: 7, brandId: 3, name: "DB - Store 3" },
            { id: 7, brandId: 4, name: "DD - Store 1" },
            { id: 7, brandId: 4, name: "DD - Store 2" },
            { id: 7, brandId: 4, name: "DD - Modulo Plaza Vea El Cortijo (6149)" },
            { id: 7, brandId: 5, name: "PJ - Store 1" },
            { id: 7, brandId: 5, name: "PJ - Store 2" },
            { id: 7, brandId: 5, name: "PJ - Store 3" },
            { id: 7, brandId: 6, name: "PP - Store 1" },
            { id: 7, brandId: 6, name: "PP - Store 2" },
            { id: 7, brandId: 6, name: "PP - Store 3" },
        ];

        this.testFamilies = [
            { id: 0, name: "All" },
            { id: 1, name: "Family 1" },
            { id: 2, name: "Family 2" },
            { id: 3, name: "Family 3" },
            { id: 4, name: "Family 4" }
        ];


        this.testPriorities = [
            { id: 0, name: "All" },
            { id: 1, name: "A++" },
            { id: 2, name: "A1" },
            { id: 3, name: "A2" },
            { id: 4, name: "A3" },
            { id: 5, name: "B1" },
            { id: 6, name: "B2" },
            { id: 7, name: "B3" },
            { id: 8, name: "C1" },
            { id: 9, name: "C2" },
            { id: 10, name: "C3" }
        ];

        this.testStatus = [
            { id: 1, name: "Ingresado" },
            { id: 12, name: "Asignado" },
            { id: 2, name: "Programado" },
            { id: 3, name: "Atendido" },
            { id: 4, name: "Confirmado" },
            { id: 5, name: "Anulado" },
            { id: 13, name: "Reactivado" },
        ];

    }

    public getAllAdminTickets(brandId: number,
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
            let selectedStatus:number[] = statusId.map(status => status.id);
            filteredTickets = filteredTickets.filter(function(ticket){
                return selectedStatus.indexOf(ticket.statusId) >= 0
            });
        } else {
            filteredTickets = filteredTickets;
        }


        return filteredTickets;
    }

    public getAllBrands(): Brand[] {

        return this.testBrands;
    }

    public getAllStores(brandId: number): Store[] {
        if (brandId == 0) {
            return this.testStores;
        } else {
            let filteredStores: Store[] = this.testStores.filter(
                store => store.brandId === brandId);

            filteredStores.unshift({ id: 0, brandId: 0, name: 'All' });

            return filteredStores
        }
    }

    public getAllFamilies(): Family[] {

        return this.testFamilies;
    }

    public getAllPriorities(): Priority[] {

        return this.testPriorities;
    }

    public getAllStatus(): Status[] {

        return this.testStatus;
    }

}