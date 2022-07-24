import styles from './TicketList.module.scss';
import { TicketListProps } from './TicketList.props';
import { Tick } from './components/Tick';
import { useTypedSelector } from 'src/hooks/useTypedSelector';
import { useMemo } from 'react';
import { sortFunc } from 'src/helpers/sortFunc';
import { filterTicks } from 'src/helpers/filterTicks';

export const TicketList = ({ tickets }: TicketListProps): JSX.Element => {
    const { limit } = useTypedSelector((state) => state.ticketsReducer);
    const { filters } = useTypedSelector((state) => state.filterReducer);
    const { sort } = useTypedSelector((state) => state.sortReducer);

    const curTickets = useMemo(() => {
        const ticks = sortFunc(sort)(filterTicks(filters, tickets));
        return ticks.slice(0, limit);
    }, [sort, filters, limit, tickets]);

    return (
        <div className={styles.list}>
            {curTickets &&
                curTickets.map((t) => <Tick key={t.price} data={t} />)}
        </div>
    );
};
