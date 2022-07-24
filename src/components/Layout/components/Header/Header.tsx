import logo from './logo.svg';
import styles from './Header.module.scss';
import cn from 'classnames';
import { HeaderProps } from './Header.props';

export const Header = ({ className, ...props }: HeaderProps): JSX.Element => {
    return (
        <div className={cn(className, styles.header)} {...props}>
            <img src={logo} alt="logo" className={styles.logo} />
        </div>
    );
};
