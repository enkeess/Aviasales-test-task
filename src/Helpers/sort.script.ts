import { SortType } from '../enums/sortType.enum';
// import { Ticket } from '../interface/ticket.interface';
import { TicketData } from '../interface/ticketData.interface';

const sortCheap = (ticks:TicketData[]):TicketData[] => {
	return(ticks.sort( (t1,t2) => t1.price - t2.price));
};

const sortFast = (ticks:TicketData[]):TicketData[] => {
	return(ticks.sort( (t1,t2) => (t1.duration)  - (t2.duration)));
};

const sortOptimal = (ticks:TicketData[]):TicketData[] => {
	return(sortCheap(ticks).sort( (t1,t2) => (t1.stops[0] + t1.stops[1])  - (t2.stops[0] + t2.stops[1])));
};

export const sortFunc = (sort:SortType) => {
	switch(sort) {
		case(SortType.CHEAP): {
			return(sortCheap);
		}
		case(SortType.FAST): {
			return(sortFast);
		}
		case(SortType.OPTIMAl): {
			return(sortOptimal);
		}
	}
};