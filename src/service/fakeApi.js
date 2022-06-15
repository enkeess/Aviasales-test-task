import testData from './test.data.json';

export default class FakeApi {
	getTickets = () => {
		return new Promise((resolve, reject) => {
			// eslint-disable-next-line no-undef
			setTimeout( () => {
				if(Math.random() < 0.75){
					resolve(testData);
				} else {
					reject(new Error('getStore error'));
				}
			}, 1000);
		});
	};
}

