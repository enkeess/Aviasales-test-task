// import { Ticket } from '../interface/ticket.interface';
import { ITicketTransformed } from '../models/ITicketTransformed';

export const filterTicks = (
    params: boolean[],
    ticks: ITicketTransformed[] | undefined
) => {
    if (!ticks) return [];
    return ticks.filter((t) =>
        t.stops.map((stops) => params[stops]).includes(true)
    );
};
