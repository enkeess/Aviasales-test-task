import styles from './FilterList.module.scss';
import { FilterListProps } from './FilterList.props';
import { FilterItem } from '../FilterItem/FilterItem';

import { useContext } from 'react';
import { TransferTypes } from '../../enums/transferTypes.enum';
import { TransferType } from '../../interface/transferType.interface';
import { AppContext } from '../../context/app.contex';

export const FilterList = ({...props}:FilterListProps):JSX.Element => {

	
	const {selected, updateSelectedTransferType} = useContext(AppContext);

	const selectors:TransferType[] = [

		{type: TransferTypes.ALL, name: 'Все'},
		{type: TransferTypes.ZERO, name: 'Без пересадок'},
		{type: TransferTypes.ONE, name: '1 пересадка'},
		{type: TransferTypes.TWO, name: '2 пересадки'},
		{type: TransferTypes.THREE, name: '3 пересадки'}
	];

	return(
		<div className={styles.filter_list} {...props}>
			{selectors.map(s => (
				<FilterItem 
					key={s.type} 
					isActive={selected[s.type]}
					onClick={() => updateSelectedTransferType && updateSelectedTransferType(s.type)}
				> 
					{s.name} 
				</FilterItem>
			))}
		</div>
	);
};