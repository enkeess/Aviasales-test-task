import styles from './Tick.module.scss';
import { TickProps } from './Tick.props';

import { TicketInfo } from '../TicketInfo/TicketInfo';

export const Tick = ({data, ...props}:TickProps):JSX.Element => {
	return(	
		<div {...props} className={styles.ticket}>
			<div className={styles.price}> {data.price} Р</div>
			<img src={`//pics.avs.io/99/36/${data.carrier}.png`} alt={data.carrier} className={styles.logo}/>
			<TicketInfo className={styles.to} title={data.to.title} block={data.to.block}/>
			<TicketInfo className={styles.from} title={data.from.title} block={data.from.block}/>
			<TicketInfo className={styles.toDuration} title={data.toDuration.title} block={data.toDuration.block}/>
			<TicketInfo className={styles.fromDuration} title={data.fromDuration.title} block={data.fromDuration.block}/>
			<TicketInfo className={styles.toStops} title={data.toStops.title} block={data.toStops.block}/>
			<TicketInfo className={styles.fromStops} title={data.fromStops.title} block={data.fromStops.block}/>
		</div>
	);
};