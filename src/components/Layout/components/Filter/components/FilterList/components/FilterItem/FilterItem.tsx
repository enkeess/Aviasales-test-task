import styles from './FilterItem.module.scss';
import cn from 'classnames';
import { FilterItemProps } from './FilterItem.props';
import { ReactComponent as Shape } from './shape.svg';

export const FilterItem = ({
    isActive = false,
    children,
    ...props
}: FilterItemProps): JSX.Element => {
    return (
        <button className={styles.filter_item} {...props}>
            <div
                className={cn(styles.checkbox, {
                    [styles.active]: isActive,
                })}
            >
                <Shape />
            </div>

            {children}
        </button>
    );
};
