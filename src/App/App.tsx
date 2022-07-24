import { Layout } from 'src/components/Layout';
import React, { useEffect, useMemo } from 'react';
import { TicketList } from 'src/components/TicketList';
import { LoadBtn } from 'src/components/LoadBtn';
import styles from './App.module.scss';
import { useTypedSelector } from 'src/hooks/useTypedSelector';
import { useGetTicketsQuery } from 'src/services/aviasalesService';
import { transformTickets } from 'src/helpers/transformTickets';
import { Spinner } from 'src/components/Spinner';
import { useActions } from 'src/hooks/useActions';

const step = 2;

export const App = (): JSX.Element => {
    const { data, isFetching, isError, isSuccess, refetch } =
        useGetTicketsQuery(1);
    const { isFull } = useTypedSelector((state) => state.ticketsReducer);
    const { setTotal, incLimit } = useActions();

    const tickets = useMemo(() => {
        return transformTickets(data);
    }, [data]);

    useEffect(() => {
        data && setTotal(data.length);
    }, [data, setTotal]);

    return (
        <Layout>
            <div className={styles.app}>
                {isFetching && <Spinner />}
                {isSuccess && (
                    <>
                        {' '}
                        <TicketList tickets={tickets} />
                        {!isFull && (
                            <LoadBtn onClick={() => incLimit(step)}>
                                Показать еще {step} билетов!
                            </LoadBtn>
                        )}
                    </>
                )}

                {isError && (
                    <>
                        <p>Ошибка сервера. Не удалось загрузить билеты... </p>
                        <LoadBtn onClick={refetch}>
                            Попробовать еще раз!
                        </LoadBtn>
                    </>
                )}
            </div>
        </Layout>
    );
};
