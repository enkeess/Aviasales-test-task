import React, { useContext, useEffect, useState } from 'react';
import { TicketList } from '../components';
import { LoadBtn } from '../components/LoadBtn/LoadBtn';
import { AppContext } from '../context/app.contex';

import styles from './App.module.scss';

export const App = ():JSX.Element => {
	const [searchId, setSearchId] = useState<string>("");
	const {updateTickets} = useContext(AppContext);
	
	const getId = async () => {
	const res = await fetch('https://front-test.beta.aviasales.ru/search')
		.then(res=>res.json());
		setSearchId(res.searchId);
	};
	
	useEffect(() => {
		getId();
	}, []);

	useEffect(() => {
		updateTickets && updateTickets(searchId);
	}, [searchId]);

	const [num, setNum] = useState<number>(5);
  
	const updateNum = ()=> {
		const newNum = num + 5;
		setNum(newNum);
	};

  return (
    <div className={styles.app}>
		<TicketList num={num}/>
		<LoadBtn updateNum={updateNum}>Показать еще 5 билетов!</LoadBtn>
    </div>
  );
};


