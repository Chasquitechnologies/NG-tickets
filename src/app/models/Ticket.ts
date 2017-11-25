export interface Ticket {

    id: number;
    globalTicketId:string;

    statusId: number;
    statusDescription: string;
    
    brandId: number;
    brandDescription: string;

    storeId: number;
    storeDescription: string;

    priorityId: number;
    priorityDescitpiont: string;

    classificationId: number;
    classificationDescription: string;

    familyId: number;
    familyDescription: string;
    
    equipmentId:number;
    equipmentDescription:string;

    failTypeId: number;
    failTypeDescription: string;

    supportAdminId: number;
    supportAdminDescription:string;

    createdOn?:Date;
    createdBy?:string;

    lastUpdatedOn?:Date;
    lastUpdatedBy?:string;

    assignedOn?:Date;
    assignedBy?:string;

    programmedOn?:Date;
    programmedBy?:string;

    atendidoOn?:Date;
    atendidoBy?:string;

    confirmedOn?:Date;
    confirmedBy?:string;

    cancelledOn?:Date;
    cancelledBy?:string;

    reactivatedOn?:Date;
    reactivatedBy?:string;

}