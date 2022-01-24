import styles from './Sort.module.scss';
import cn from 'classnames';
import { SortProps } from './Sort.props';


export const Sort = ({className, ...props}:SortProps):JSX.Element => {
	return(

		<div className={cn(className, styles.sort)} {...props}>
			Sort
		</div>
	);
};