import { InfoPair } from './infoPair.interface';

export interface TicketData {
	price: number;
	duration: number;
	stops: number[];
	to: InfoPair;
	from: InfoPair;
	toDuration: InfoPair;
	fromDuration: InfoPair;
	toStops: InfoPair;
	fromStops: InfoPair;
	carrier: string;
}