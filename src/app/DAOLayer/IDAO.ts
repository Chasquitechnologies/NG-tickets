
import { Injectable } from '@angular/core';
import { Status } from '../models/Status';
import { Ticket } from '../models/Ticket';
import { TicketCountSummary } from '../models/TicketCountSummary';
import { Brand } from '../models/Brand';
import { Store } from '../models/Store';
import { Family } from '../models/Family';
import { Priority } from '../models/Priority';
import { Observable } from 'rxjs/Observable';
import { TechnicianType } from '../models/TechnicianType';
import { TechnicianName } from '../models/TechnicianName';
import { EquipmentClassification } from '../models/EquipmentClassification';
import { EquipmentDetail } from '../models/EquipmentDetail';
import { FailureType } from '../models/FailureType';


@Injectable()
export abstract class IDAO {

    // TICKET RELATED INTERFACES
    getAllAdminTickets: (brandId: number,
        storeId: number,
        familyId: number,
        priorityId: number,
        statusId: Status[],
        dateRangeSelected: Date[]) => Observable<Ticket[]>;

    getAdminTicketDetails: (ticketId: number) => Observable<Ticket>;

    getAdminTicketsSummaryCount: (brandId: number,
        storeId: number,
        familyId: number,
        priorityId: number,
        statusId: Status[],
        dateRangeSelected: Date[]) => Observable<TicketCountSummary>;

  
    // DROPDOWN RELATED INTERFACES  FOR MAIN ADMIN TICKET PAGE, DETAIL PAGE AND MYTICKETS PAGES   
    getAllBrands: () => Observable<Brand[]>;

    getAllStores: (brandId: number) => Observable<Store[]>;

    getAllFamilies: () => Observable<Family[]>;

    getAllPriorities: () => Observable<Priority[]>;

    getAllStatus: () => Observable<Status[]>;

    getNextStatus: (ticketId:number) => Observable<Status[]>;

    getTechnicianType: () => Observable<TechnicianType[]>;

    getTechnicianName: (techTypeId:number, equipmentFamilyId: number, supportAdminId: number) => Observable<TechnicianName[]>;

    
    // DROPDOWN RELATED INTERFACES FOR NEW TICKET PAGE

    getBrandDropdownOptions:() => Observable<Brand[]>;
    
    getStoreDropdownOptions:(brandId: number) => Observable<Store[]>
    
    getClassificationOptions:() => Observable<EquipmentClassification[]>
    
    getFamilyDropdownOptions:(storeId:number,classificationId:number) => Observable<Family[]>
    
    getEquipmentDropdownOptions:(storeId:number, classificationId:number, familyId:number) => Observable<EquipmentDetail[]>
    
    getFailureTypeDropdownOptions:()=> Observable<FailureType[]> 
    
    
}
