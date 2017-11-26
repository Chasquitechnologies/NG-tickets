export interface TicketCountSummary {
    totalPendingTickets: number,
    totalPriorityA: number,
    totalPriorityB: number,
    totalPriorityC: number,
    percentPriorityA?: number
    percentPriorityB?: number,
    percentPriorityC?: number
}