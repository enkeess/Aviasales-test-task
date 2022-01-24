import { Ticket } from '../interface/ticket.interface';

export interface Responce {
	tickets: Ticket[];
	stop: boolean;
}

export const testData:Responce = {
	tickets: [ 
		{
			carrier: "EK",
			price: 34809,
			segments: [
				{
					date: "2022-02-01T11:48:00.000Z",
					destination: "HKT",
					duration: 955,
					origin: "MOW",
					stops: [
						"KUL", 
						"SIN"
					]
				},
		
				{
					date: "2022-02-20T21:46:00.000Z",
					destination: "MOW",
					duration: 647,
					origin: "HKT",
					stops: []
				}
			]
		},
		
		{
			carrier: "EK",
			price: 71561,
			segments: [
				{
					date: "2022-02-01T12:25:00.000Z",
					destination: "MOW",
					duration: 978,
					origin: "HKT",
					stops: [
						"SIN"
					]
				},
		
				{
					date: "2022-02-21T09:33:00.000Z",
					destination: "HKT",
					duration: 1884,
					origin: "MOW",
					stops: []
				}
			]
		}	
	],
	stop: false
};