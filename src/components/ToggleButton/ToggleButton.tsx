import styles from './ToggleButton.module.scss';
import cn from 'classnames';
import { ToggleButtonProps } from './ToggleButton.props';




export const ToggleButton = ({children, className, isActive = false, ...props}:ToggleButtonProps):JSX.Element => {
	return(

		<button className={cn(className, styles.btn, {
			[styles.active]: isActive
		})} {...props}>
			{children}
		</button>
		
	);
};