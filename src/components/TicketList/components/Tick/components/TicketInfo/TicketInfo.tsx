import styles from './TicketInfo.module.scss';
import cn from 'classnames';
import { TicketInfoProps } from './TicketInfo.props';

export const TicketInfo = ({
    title,
    block,
    className,
    ...props
}: TicketInfoProps): JSX.Element => {
    return (
        <div {...props} className={cn(className, styles.info)}>
            <div className={styles.info_title}>{title}</div>

            <div className={styles.info_block}>{block}</div>
        </div>
    );
};
