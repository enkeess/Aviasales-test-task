import { Filter } from './components/Filter';
import { Header } from './components/Header';
import { LayoutProps } from './Layout.props';
import { ToggleButtonGroup } from './components/ToggleButtonGroup';

import styles from './Layout.module.scss';

export const Layout = ({ children }: LayoutProps): JSX.Element => {
    return (
        <div className={styles.layout}>
            <Header className={styles.header} />
            <Filter className={styles.filter} />
            <ToggleButtonGroup className={styles.sort} />
            <div className={styles.body}>{children}</div>
        </div>
    );
};
