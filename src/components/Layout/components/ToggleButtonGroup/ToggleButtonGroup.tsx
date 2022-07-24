import styles from './ToggleButtonGroup.module.scss';
import { ToggleButtonGroupProps } from './ToggleButtonGroup.props';
import { ToggleButton } from './components/ToggleButton';
import cn from 'classnames';
import { SortType } from 'src/enums/SortType';
import { useActions } from 'src/hooks/useActions';
import { useTypedSelector } from 'src/hooks/useTypedSelector';

export const ToggleButtonGroup = ({
    className,
    ...props
}: ToggleButtonGroupProps): JSX.Element => {
    const types: SortType[] = [SortType.CHEAP, SortType.FAST, SortType.OPTIMAl];
    const { updateSort } = useActions();
    const { sort } = useTypedSelector((state) => state.sortReducer);

    return (
        <div className={cn(className, styles.group)} {...props}>
            {types.map((t) => (
                <ToggleButton
                    key={t}
                    isActive={sort == t}
                    onClick={() => {
                        updateSort && updateSort(t);
                    }}
                >
                    {t}
                </ToggleButton>
            ))}
        </div>
    );
};
