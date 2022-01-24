import styles from './TicketList.module.scss';
import { TicketListProps } from './TicketList.props';
import { Tick } from '../Tick/Tick';
import { useContext, useEffect, useState } from 'react';
import { AppContext } from '../../context/app.contex';
import { sortFunc } from '../../Helpers/sort.script';
import { filterTicks } from '../../Helpers/filter.script';
import { Spinner } from '../Spinner/Spinner';
import { TicketData } from '../../interface/ticketData.interface';

export const TicketList = ({ num, ...props}:TicketListProps):JSX.Element => {

	const {sort, selected, tickets} = useContext(AppContext);
	const [ticks, setTicks] = useState<TicketData[]>(tickets);

	useEffect(() => {
		const [...oldTicks] = [...ticks];
		setTicks(sortFunc(sort)(oldTicks));

	}, [sort, tickets]);

	useEffect(() => {
		const [...oldTicks] = [...tickets];
		const curSort = sort;
		setTicks(sortFunc(curSort)(filterTicks(selected, oldTicks)));
	}, [selected, tickets]);

	const newTicks = ticks.slice(0,num);

	return(	
		<div {...props} className={styles.list}>
			{
				newTicks.length > 0 ?
					newTicks.map(t => <Tick key={t.price * t.duration} data={t}/>) 
				: 
					<Spinner/>
			}
		</div>
	);
};