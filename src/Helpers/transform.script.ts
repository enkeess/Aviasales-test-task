import { TransferTypes } from '../enums/transferTypes.enum';
import { Ticket } from '../interface/ticket.interface';
import { TicketData } from '../interface/ticketData.interface';

const transformTime = (start:string, long:number):string => {
		
	const st = new Date(start);
	const end = new Date(st.getTime() + long*60*1000);
	const str = `${ getZero(st.getHours())}:${getZero(st.getMinutes())} - ${getZero(end.getHours())}:${getZero(end.getMinutes())}`;
	return str;
}; 

const transformDuration = (duration:number):string => {
	const hours = getZero(Math.floor(duration / 60));
	const minutes = getZero(duration % 60);
	return(`${hours}ч ${minutes}м`);
};

const getZero = (n:number):string => {
	return(n >= 10 ? `${n}` : `0${n}`);
};

const transformStops = (stops:string[]):string => {
		
	const len = stops.length;

	switch(len) {
		case(TransferTypes.ZERO): {
			return('Без пересадок');
		}
		case(TransferTypes.ONE): {
			return('1 пересадка');
		}
		case(TransferTypes.TWO): {
			return('2 пересадки');
		}
		case(TransferTypes.THREE): {
			return('3 пересадки');
		}
	}

	return'';
};

export const transformTickets = (tickets:Ticket[]):TicketData[] => {
	return tickets.map((t):TicketData => {
		return(
			{
				price: t.price,
				duration: t.segments[0].duration + t.segments[1].duration,
				stops: [t.segments[0].stops.length, t.segments[1].stops.length],
				to: {
					title: `${t.segments[0].origin} - ${t.segments[0].destination}`,
					block: transformTime(t.segments[0].date, t.segments[0].duration)
				},
				from: {
					title: `${t.segments[1].origin} - ${t.segments[1].destination}`,
					block: transformTime(t.segments[1].date, t.segments[1].duration)
				},
				toDuration: {
					title: 'В пути',
					block: transformDuration(t.segments[0].duration)
				},
				fromDuration: {
					title: 'В пути',
					block: transformDuration(t.segments[1].duration)
				},
				toStops: {
					title: transformStops(t.segments[0].stops),
					block: t.segments[0].stops.join(', ')
				},
				fromStops: {
					title: transformStops(t.segments[1].stops),
					block: t.segments[1].stops.join(', ')
				}
			}
		);
	});
};