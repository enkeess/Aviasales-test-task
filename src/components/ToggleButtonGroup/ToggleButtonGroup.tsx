import styles from './ToggleButtonGroup.module.scss';
import { ToggleButtonGroupProps } from './ToggleButtonGroup.props';
import { ToggleButton } from '../ToggleButton/ToggleButton';
import cn from 'classnames';
import { useContext } from 'react';
import { SortType } from '../../enums/sortType.enum';
import { AppContext } from '../../context/app.contex';


export const ToggleButtonGroup = ({className, ...props}:ToggleButtonGroupProps):JSX.Element => {

	const types:SortType[] = [SortType.CHEAP, SortType.FAST, SortType.OPTIMAl];

	const {sort, updateSort} = useContext(AppContext);

	return(
		<div className={cn(className, styles.group)} {...props}>
		{types.map(t=> (
			<ToggleButton 
				key={t}
				isActive={sort == t}
				onClick={() => { 
					updateSort && updateSort(t);
				}}
			> 
				{t} 
			</ToggleButton> 
		))}
		</div>
	);
};