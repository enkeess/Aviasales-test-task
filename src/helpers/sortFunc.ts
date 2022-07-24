import { SortType } from '../enums/SortType';
import { ITicketTransformed } from '../models/ITicketTransformed';

const sortCheap = (
    ticks: ITicketTransformed[] | undefined
): ITicketTransformed[] => {
    if (!ticks) return [];
    return ticks.sort((t1, t2) => t1.price - t2.price);
};

const sortFast = (
    ticks: ITicketTransformed[] | undefined
): ITicketTransformed[] => {
    if (!ticks) return [];
    return ticks.sort((t1, t2) => t1.duration - t2.duration);
};

const sortOptimal = (
    ticks: ITicketTransformed[] | undefined
): ITicketTransformed[] => {
    if (!ticks) return [];
    return sortCheap(ticks).sort(
        (t1, t2) => t1.stops[0] + t1.stops[1] - (t2.stops[0] + t2.stops[1])
    );
};

export const sortFunc = (sort: SortType) => {
    switch (sort) {
        case SortType.CHEAP: {
            return sortCheap;
        }
        case SortType.FAST: {
            return sortFast;
        }
        case SortType.OPTIMAl: {
            return sortOptimal;
        }
    }
};
