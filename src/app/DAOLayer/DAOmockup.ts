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
import { EquipmentClassification } from "../models/EquipmentClassification";
import { FailureType } from "../models/FailureType";
import { EquipmentDetail } from "../models/EquipmentDetail";


@Injectable()
export class DAOmockup implements IDAO {

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
        dateRangeSelected: Date[]): Observable<TicketCountSummary> {

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

        return this.http.get<TicketCountSummary>('http://localhost:3000/ticketCountSummary' + query);
    }


    // DROPDOWN OPTIONS FOR ADMIN TICKET PAGE, MY TICKETS PAGE AND DETAIL PAGE

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




    // DROPDOWN OPTIONS FOR NEW TICKET PAGE 

    public getBrandDropdownOptions () : Observable<Brand[]>{
        return this.http.get<Brand[]>('http://localhost:3000/newTicketBrands');
        
    }
    public getStoreDropdownOptions(brandId: number): Observable<Store[]>{
        return this.http.get<Store[]>('http://localhost:3000/newTicketStores'+brandId.toString());;
    }
    
    public getClassificationOptions (): Observable<EquipmentClassification[]>{
        return this.http.get<EquipmentClassification[]>('http://localhost:3000/newTicketClassification1');;
    }

    public getFamilyDropdownOptions (storeId: number, classificationId: number): Observable<Family[]>{
        return this.http.get<Family[]>('http://localhost:3000/newTicketFamilies11');;
    }
    public getEquipmentDropdownOptions (storeId: number, classificationId: number, familyId: number): Observable<EquipmentDetail[]>{
        return this.http.get<EquipmentDetail[]>('http://localhost:3000/newTicketEquipment11');;
    }
    public getFailureTypeDropdownOptions (): Observable<FailureType[]>{
        return this.http.get<FailureType[]>('http://localhost:3000/newTicketFailureType');;
    }

}