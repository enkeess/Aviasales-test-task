import React, { useContext, useEffect, useState } from 'react';
import { TicketList } from '../components';
import { LoadBtn } from '../components/LoadBtn/LoadBtn';
import { AppContext } from '../context/app.contex';

import styles from './App.module.scss';

const step = 2;

export const App = ():JSX.Element => {
	const { updateTickets, tickets, isError } = useContext(AppContext);
	
	useEffect(() => {
		updateTickets && updateTickets();
	}, []);

	const [showBtn, setShowBtn] = useState<boolean>(true);

	const [num, setNum] = useState<number>(step);
  
	const updateNum = ()=> {
		const newNum = num + step;
		setNum(newNum);

		if(tickets.length < newNum) {
			setShowBtn(false);
		}
	};

	const reload = () => {
		setNum(step);
		setShowBtn(true);
		updateTickets && updateTickets();
	};

  return (
    <div className={styles.app}>
		{ !isError &&  <>
			<TicketList num={num}/>
			{ showBtn && <LoadBtn onClick={updateNum}>Показать еще {step} билетов!</LoadBtn> }
		</>  }


		{isError && <>
				<p>Ошибка сервера. Не удалось загрузить билеты... </p>
				<LoadBtn onClick={reload}>Попробовать еще раз!</LoadBtn>
		</> }


    </div>
  );
};


