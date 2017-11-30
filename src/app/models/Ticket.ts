export interface Ticket {

    Id: number;
    GlobalTicketId: string;

    FlowStatusId: number;
    Status: string;

    BrandId: number;
    Brand: string;

    StoreId: number;
    Store: string;

    CostCenterId?: number;
    CostCenter?: string;

    // PriorityId: number;
    // Priority: string;

    AffectPeople?: boolean;
    AffectStore?: boolean;
    IsHighPriority?: boolean;
    PriorityDisplay?: string;

    EquipmentId: number;
    Classification: string;

    EquipmentFamilyId: number;
    EquipmentFamily: string;

    EquipmentDetailId: number;
    EquipmentDetail: string;
    EquipmentDetailCode?: string;

    FailTypeId: number;
    FailureType: string;

    SupportAdminId: number;
    SupportAdminName: string;
    SupportAdminEmail?: string;

    TicketPriorityId: number;
    TicketPriority: string;

    Comments?: string;
    User?: string;

    // LastTechnicianTypeSelectedId: number;

    TechnicianTypeId?: number;
    TechnicianType?: string;

    TechnicianId?: number;
    ProviderId?: number;
    TechnicianOrProviderName?: string;

    CreatedOn?: Date;
    CreatedOnDisplay?: string;
    CreatedBy?: string;

    AssignedDate?: Date;
    AssignedDateDisplay?: string;
    
    ProgrammedDate?: Date;
    ProgrammedDateDisplay?: string;

    AtendidoDate?: Date;
    AtendidoDateDisplay?: string;

    ConfirmationDate?: Date;
    ConfirmationDateDisplay?: string;

    AnuladoDate?: Date;
    AnuladoDateDisplay?: string;

    ReactivadoDate?: Date;
    ReactivadoDateDisplay?: string;

}
