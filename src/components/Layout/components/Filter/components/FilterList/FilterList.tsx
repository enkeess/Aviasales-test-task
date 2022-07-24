import styles from './FilterList.module.scss';
import { FilterListProps } from './FilterList.props';
import { FilterItem } from './components/FilterItem';
import { TransferType } from 'src/enums/TransferType';
import { ITransferType } from 'src/models/ITransferType';
import { useTypedSelector } from 'src/hooks/useTypedSelector';
import { useActions } from 'src/hooks/useActions';
import { useMemo } from 'react';

export const FilterList = ({ ...props }: FilterListProps): JSX.Element => {
    const { filters } = useTypedSelector((state) => state.filterReducer);
    const { updateFilter } = useActions();

    const selectors: ITransferType[] = useMemo(
        () => [
            { type: TransferType.ALL, name: 'Все' },
            { type: TransferType.ZERO, name: 'Без пересадок' },
            { type: TransferType.ONE, name: '1 пересадка' },
            { type: TransferType.TWO, name: '2 пересадки' },
            { type: TransferType.THREE, name: '3 пересадки' },
        ],
        []
    );

    return (
        <div className={styles.filter_list} {...props}>
            {selectors.map((s) => (
                <FilterItem
                    key={s.type}
                    isActive={filters[s.type]}
                    onClick={() => updateFilter(s.type)}
                >
                    {s.name}
                </FilterItem>
            ))}
        </div>
    );
};
