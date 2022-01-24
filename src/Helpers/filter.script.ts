// import { Ticket } from '../interface/ticket.interface';
import { TicketData } from '../interface/ticketData.interface';

export	const filterTicks = (params: boolean[], ticks:TicketData[]) => {
	return(
		ticks.filter(
			(t) => t.stops.map(stops => params[stops]).includes(true)
	));
};