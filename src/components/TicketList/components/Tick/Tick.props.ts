import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { ITicketTransformed } from 'src/models/ITicketTransformed';

export interface TickProps
    extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    data: ITicketTransformed;
}
