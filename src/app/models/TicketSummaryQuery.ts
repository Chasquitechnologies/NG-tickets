import { Brand } from "./Brand";
import { Store } from "./Store";
import { Family } from "./Family";
import { Priority } from "./Priority";
import { Status } from "./Status";

export interface TicketSummaryQuery {
    selectedBrand: Brand,
    selectedStore: Store,
    selectedFamily: Family,
    selectedPriority: Priority,
    selectedStatus: Status[],
    selectedDateRange: Date[]
}