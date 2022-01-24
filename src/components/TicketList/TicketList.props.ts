import { DetailedHTMLProps, HTMLAttributes} from 'react';

export interface TicketListProps extends DetailedHTMLProps< HTMLAttributes <HTMLDivElement>,  HTMLDivElement>{
	num:number;
}