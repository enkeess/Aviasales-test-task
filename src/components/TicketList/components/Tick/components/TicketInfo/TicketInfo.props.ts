import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface TicketInfoProps
    extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    title: string;
    block: string | number;
}
