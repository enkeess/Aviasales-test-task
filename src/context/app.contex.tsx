import { createContext, PropsWithChildren, useState } from 'react';
import { SortType } from '../enums/sortType.enum';
import { TransferTypes } from '../enums/transferTypes.enum';
import { transformTickets } from '../Helpers/transform.script';
import { TicketData } from '../interface/ticketData.interface';


export interface IAppContext {
	selected: boolean[];
	sort: SortType;
	tickets: TicketData[];
	updateSelectedTransferType?: (t:TransferTypes) => void;
	updateSort?: (t : SortType) => void;
	updateTickets?: (searchId: string) => void;
}

export const AppContext = createContext<IAppContext>({ selected: [false, false, false, false, false], sort: SortType.CHEAP, tickets: []});

export const AppContextProvider = ({ selected, sort, children }: PropsWithChildren<IAppContext>): JSX.Element => {
	const [selectedTransferType, setSelectedTransferType] = useState<boolean[]>(selected);
	
	const updateSelectedTransferType = (t: TransferTypes) => {
		let newSelectedTransferType:boolean[] = [...selectedTransferType];

		if(t == TransferTypes.ALL) {
			if(!newSelectedTransferType[t]) {
				newSelectedTransferType = newSelectedTransferType.map(() => true);
			} else {
				newSelectedTransferType = newSelectedTransferType.map(() => false);
			}
		} else {
			newSelectedTransferType[t] = !newSelectedTransferType[t];
			newSelectedTransferType[TransferTypes.ALL] = !newSelectedTransferType.slice(0,4).includes(false);
		} 
		
		setSelectedTransferType(newSelectedTransferType);
	};

	const [sortState, setSort] = useState<SortType>(sort);

	const updateSort = (t : SortType) => {
		setSort(t);
	};

	const updateTickets = async (searchId : string) => {

		let newTicks:TicketData[] = [];
		let response = new Response();
		let myStop = false;
		
		do {
			response = await 
			fetch(`https://front-test.beta.aviasales.ru/tickets?searchId=${searchId}`);
			
			if(!response.ok) {
				switch(response.status) {
					case(404): {
						console.log(`Server error: ${response.status}`);
						myStop = true;
						return;
					}
					case(500): {
						console.log(`Server error: ${response.status}`);
						continue;
					}
				}
				
			} else {
				const res = await response.json();

				[...newTicks] = [...newTicks, ...transformTickets(res.tickets)];
				myStop = res.stop;
				
					
			}
		} while(!myStop);
		
		setTicks(newTicks);

	};

	const [ticks, setTicks] = useState<TicketData[]>([]);

	return <AppContext.Provider value={{updateTickets, selected: selectedTransferType, sort:sortState, updateSelectedTransferType, updateSort, tickets:ticks}}>
		{children}
	</AppContext.Provider>;
};