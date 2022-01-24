import styles from './LoadBtn.module.scss';
import { LoadBtnProps } from './LoadBtn.props';


export const LoadBtn = ({children, updateNum}:LoadBtnProps):JSX.Element => {

	return(
		<button className={styles.btn} onClick={()=> updateNum()}>
			{children}
		</button>
	);
};