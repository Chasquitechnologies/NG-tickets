import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import { Ticket } from '../models/Ticket';


@Injectable()
export class AdminTicketService {

  constructor(private http: Http) { 

    
  }

  getAdminTickets():Ticket[] {
    // return this.http.get('https://www.primefaces.org/primeng/assets/showcase/data/cars-small.json')
    //             .toPromise()
    //             .then(res => <Car[]> res.json().data)
    //             .then(data => { return data; });

    let testTickets:Ticket[] = [
      {id: 1, globalTicketId:'T-001', statusId: 1, statusDescription: 'Ingresado', brandId: 1, brandDescription: 'Bembos', 
      storeId: 1, storeDescription: 'BB - Aurora', priorityId: 1, priorityDescitpiont: 'A++', classificationId: 1, classificationDescription: 'Equipos', 
      familyId: 1, familyDescription: 'Family 1', equipmentId:1000, equipmentDescription:'Nombre de Equipo 1', 
      failTypeId: 1, failTypeDescription: 'Total', supportAdminId: 1, supportAdminDescription:'Support Admin 1'},

      {id: 2, globalTicketId:'T-002', statusId: 12, statusDescription: 'Asignado', brandId: 1, brandDescription: 'Bembos', 
      storeId: 2, storeDescription: 'BB - Plaza San Miguel', priorityId: 1, priorityDescitpiont: 'A++', classificationId: 1, classificationDescription: 'Equipos', 
      familyId: 1, familyDescription: 'Family 1', equipmentId:1000, equipmentDescription:'Nombre de Equipo 2', 
      failTypeId: 1, failTypeDescription: 'Total', supportAdminId: 1, supportAdminDescription:'Support Admin 1'},

      {id: 3, globalTicketId:'T-003', statusId: 2, statusDescription: 'Programado', brandId: 1, brandDescription: 'Bembos', 
      storeId: 3, storeDescription: 'BB - Regatas', priorityId: 1, priorityDescitpiont: 'A++', classificationId: 1, classificationDescription: 'Equipos', 
      familyId: 1, familyDescription: 'Family 1', equipmentId:1000, equipmentDescription:'Nombre de Equipo 3', 
      failTypeId: 1, failTypeDescription: 'Total', supportAdminId: 1, supportAdminDescription:'Support Admin 1'},
    
      {id: 4, globalTicketId:'T-004', statusId: 3, statusDescription: 'Atendido', brandId: 3, brandDescription: 'Don Belisario', 
      storeId: 11, storeDescription: 'DB - Store 3', priorityId: 1, priorityDescitpiont: 'A++', classificationId: 1, classificationDescription: 'Equipos', 
      familyId: 1, familyDescription: 'Family 1', equipmentId:1000, equipmentDescription:'Nombre de Equipo 4', 
      failTypeId: 1, failTypeDescription: 'Total', supportAdminId: 1, supportAdminDescription:'Support Admin 1'},

      {id: 5, globalTicketId:'T-005', statusId: 4, statusDescription: 'Confirmado', brandId: 4, brandDescription: "Dunkin' Donuts", 
      storeId: 14, storeDescription: 'DD - Modulo Plaza Vea El Cortijo (6149)', priorityId: 1, priorityDescitpiont: 'A++', classificationId: 1, classificationDescription: 'Equipos', 
      familyId: 1, familyDescription: 'Family 1', equipmentId:1000, equipmentDescription:'Nombre de Equipo 5', 
      failTypeId: 1, failTypeDescription: 'Total', supportAdminId: 1, supportAdminDescription:'Support Admin 1'},

      {id: 6, globalTicketId:'T-006', statusId: 5, statusDescription: 'Anulado', brandId: 5, brandDescription: 'Papa Johns', 
      storeId: 16, storeDescription: 'PJ - Store 2', priorityId: 1, priorityDescitpiont: 'A++', classificationId: 1, classificationDescription: 'Equipos', 
      familyId: 1, familyDescription: 'Family 1', equipmentId:1000, equipmentDescription:'Nombre de Equipo 6', 
      failTypeId: 1, failTypeDescription: 'Total', supportAdminId: 1, supportAdminDescription:'Support Admin 1'},

      {id: 7, globalTicketId:'T-007', statusId: 13, statusDescription: 'Reactivado', brandId: 6, brandDescription: 'Popeyes', 
      storeId: 20, storeDescription: 'PP - Store 3', priorityId: 1, priorityDescitpiont: 'A++', classificationId: 1, classificationDescription: 'Equipos', 
      familyId: 1, familyDescription: 'Family 1', equipmentId:1000, equipmentDescription:'Nombre de Equipo 7', 
      failTypeId: 1, failTypeDescription: 'Total', supportAdminId: 1, supportAdminDescription:'Support Admin 1'},

      {id: 8, globalTicketId:'T-008', statusId: 4, statusDescription: 'Confirmado', brandId: 6, brandDescription: 'Popeyes', 
      storeId: 20, storeDescription: 'PP - Store 3', priorityId: 1, priorityDescitpiont: 'A++', classificationId: 1, classificationDescription: 'Equipos', 
      familyId: 1, familyDescription: 'Family 1', equipmentId:1000, equipmentDescription:'Nombre de Equipo 7', 
      failTypeId: 1, failTypeDescription: 'Total', supportAdminId: 1, supportAdminDescription:'Support Admin 1'},

      {id: 9, globalTicketId:'T-009', statusId: 4, statusDescription: 'Confirmado', brandId: 6, brandDescription: 'Popeyes', 
      storeId: 20, storeDescription: 'PP - Store 3', priorityId: 1, priorityDescitpiont: 'A++', classificationId: 1, classificationDescription: 'Equipos', 
      familyId: 1, familyDescription: 'Family 1', equipmentId:1000, equipmentDescription:'Nombre de Equipo 7', 
      failTypeId: 1, failTypeDescription: 'Total', supportAdminId: 1, supportAdminDescription:'Support Admin 1'},

      {id: 10, globalTicketId:'T-010', statusId: 4, statusDescription: 'Confirmado', brandId: 6, brandDescription: 'Popeyes', 
      storeId: 20, storeDescription: 'PP - Store 3', priorityId: 1, priorityDescitpiont: 'A++', classificationId: 1, classificationDescription: 'Equipos', 
      familyId: 1, familyDescription: 'Family 1', equipmentId:1000, equipmentDescription:'Nombre de Equipo 7', 
      failTypeId: 1, failTypeDescription: 'Total', supportAdminId: 1, supportAdminDescription:'Support Admin 1'},

      {id: 11, globalTicketId:'T-011', statusId: 3, statusDescription: 'Atendido', brandId: 6, brandDescription: 'Popeyes', 
      storeId: 20, storeDescription: 'PP - Store 3', priorityId: 1, priorityDescitpiont: 'A++', classificationId: 1, classificationDescription: 'Equipos', 
      familyId: 1, familyDescription: 'Family 1', equipmentId:1000, equipmentDescription:'Nombre de Equipo 7', 
      failTypeId: 1, failTypeDescription: 'Total', supportAdminId: 1, supportAdminDescription:'Support Admin 1'},

      {id: 12, globalTicketId:'T-012', statusId: 3, statusDescription: 'Atendido', brandId: 6, brandDescription: 'Popeyes', 
      storeId: 20, storeDescription: 'PP - Store 3', priorityId: 1, priorityDescitpiont: 'A++', classificationId: 1, classificationDescription: 'Equipos', 
      familyId: 1, familyDescription: 'Family 1', equipmentId:1000, equipmentDescription:'Nombre de Equipo 7', 
      failTypeId: 1, failTypeDescription: 'Total', supportAdminId: 1, supportAdminDescription:'Support Admin 1'},

      {id: 13, globalTicketId:'T-003', statusId: 3, statusDescription: 'Atendido', brandId: 6, brandDescription: 'Popeyes', 
      storeId: 20, storeDescription: 'PP - Store 3', priorityId: 1, priorityDescitpiont: 'A++', classificationId: 1, classificationDescription: 'Equipos', 
      familyId: 1, familyDescription: 'Family 1', equipmentId:1000, equipmentDescription:'Nombre de Equipo 7', 
      failTypeId: 1, failTypeDescription: 'Total', supportAdminId: 1, supportAdminDescription:'Support Admin 1'},

      {id: 14, globalTicketId:'T-014', statusId: 2, statusDescription: 'Programado', brandId: 6, brandDescription: 'Popeyes', 
      storeId: 20, storeDescription: 'PP - Store 3', priorityId: 1, priorityDescitpiont: 'A++', classificationId: 1, classificationDescription: 'Equipos', 
      familyId: 1, familyDescription: 'Family 1', equipmentId:1000, equipmentDescription:'Nombre de Equipo 7', 
      failTypeId: 1, failTypeDescription: 'Total', supportAdminId: 1, supportAdminDescription:'Support Admin 1'},

      {id: 15, globalTicketId:'T-015', statusId: 2, statusDescription: 'Programado', brandId: 6, brandDescription: 'Popeyes', 
      storeId: 20, storeDescription: 'PP - Store 3', priorityId: 1, priorityDescitpiont: 'A++', classificationId: 1, classificationDescription: 'Equipos', 
      familyId: 1, familyDescription: 'Family 1', equipmentId:1000, equipmentDescription:'Nombre de Equipo 7', 
      failTypeId: 1, failTypeDescription: 'Total', supportAdminId: 1, supportAdminDescription:'Support Admin 1'},

      {id: 16, globalTicketId:'T-016', statusId: 1, statusDescription: 'Ingresado', brandId: 6, brandDescription: 'Popeyes', 
      storeId: 20, storeDescription: 'PP - Store 3', priorityId: 1, priorityDescitpiont: 'A++', classificationId: 1, classificationDescription: 'Equipos', 
      familyId: 1, familyDescription: 'Family 1', equipmentId:1000, equipmentDescription:'Nombre de Equipo 7', 
      failTypeId: 1, failTypeDescription: 'Total', supportAdminId: 1, supportAdminDescription:'Support Admin 1'}
    
    ];


    return testTickets
  }

}
