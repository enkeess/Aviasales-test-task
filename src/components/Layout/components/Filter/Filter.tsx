import styles from './Filter.module.scss';
import cn from 'classnames';
import { FilterProps } from './Filter.props';
import { FilterList } from './components/FilterList';

export const Filter = ({ className, ...props }: FilterProps): JSX.Element => {
    return (
        <div className={cn(className, styles.filter)} {...props}>
            <div className={styles.filter_title}>количество пересадок</div>
            <FilterList />
        </div>
    );
};
