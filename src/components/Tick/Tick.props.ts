import { DetailedHTMLProps, HTMLAttributes, } from 'react';
import { TicketData } from '../../interface/ticketData.interface';

export interface TickProps extends DetailedHTMLProps< HTMLAttributes <HTMLDivElement>,  HTMLDivElement>{
	data: TicketData;
}