import { Filter } from '../components';
import { Header } from '../components';
import { LayoutProps } from './Layout.props';
import { ToggleButtonGroup } from '../components';

import styles from './Layout.module.scss';

export const Layout = ({children}:LayoutProps):JSX.Element => {
	return(
		<div className={styles.layout}>
			<Header className={styles.header}/>
			<Filter className={styles.filter}/>
			<ToggleButtonGroup className={styles.sort}/>
			<div className={styles.body}>
				{children}
			</div>
		</div>
	);
};