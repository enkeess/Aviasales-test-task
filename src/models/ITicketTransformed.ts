import { InfoPair } from './IPair';

export interface ITicketTransformed {
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
