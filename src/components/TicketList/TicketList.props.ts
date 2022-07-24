import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { ITicketTransformed } from 'src/models/ITicketTransformed';
export interface TicketListProps
    extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    tickets: ITicketTransformed[] | undefined;
}
