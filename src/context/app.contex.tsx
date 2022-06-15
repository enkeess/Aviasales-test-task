import { createContext, PropsWithChildren, useState } from 'react';
import { SortType } from '../enums/sortType.enum';
import { TransferTypes } from '../enums/transferTypes.enum';
import { transformTickets } from '../Helpers/transform.script';
import { TicketData } from '../interface/ticketData.interface';
import FakeApi from '../service/fakeApi';


export interface IAppContext {
	selected: boolean[];
	sort: SortType;
	tickets: TicketData[];
	isError?: boolean;
	updateSelectedTransferType?: (t:TransferTypes) => void;
	updateSort?: (t : SortType) => void;
	updateTickets?: () => void;
}

export const initialStore = {
	selected: [true, true, true, true, true], 
	sort: SortType.CHEAP, 
	tickets: []
};

export const AppContext = createContext<IAppContext>(initialStore);

export const AppContextProvider = ({ selected, sort, children }: PropsWithChildren<IAppContext>): JSX.Element => {
	const [selectedTransferType, setSelectedTransferType] = useState<boolean[]>(selected);
	
	const fakeApi = new FakeApi();

	const [isError, setIsErorr] = useState<boolean>(false);
	const [isStop, setIsStop] = useState<boolean>(false);
	const [ticks, setTicks] = useState<TicketData[]>([]);
	const [sortState, setSort] = useState<SortType>(sort);

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

	const updateSort = (t : SortType) => {
		setSort(t);
	};

	const updateTickets = async () => {

		setIsStop(false);
		setIsErorr(false);

		let newTicks:TicketData[] = [];

		await fakeApi.getTickets()
			.then(({tickets, stop}) => {
				newTicks = transformTickets(tickets);
				setIsStop(stop);
			})
			.catch(err => {
				setIsErorr(true);
				console.log(err);
			});
		
		setTicks(newTicks);
	};


	return <AppContext.Provider value={{updateTickets, selected: selectedTransferType, sort:sortState, updateSelectedTransferType, updateSort, tickets:ticks, isError:isError}}>
		{children}
	</AppContext.Provider>;
};