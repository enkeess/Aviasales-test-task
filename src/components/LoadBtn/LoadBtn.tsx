import styles from './LoadBtn.module.scss';
import { LoadBtnProps } from './LoadBtn.props';

export const LoadBtn = ({ children, onClick }: LoadBtnProps): JSX.Element => {
    return (
        <button className={styles.btn} onClick={onClick}>
            {children}
        </button>
    );
};
