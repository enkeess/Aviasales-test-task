import React from 'react';
import ReactDOM from 'react-dom';
import './styles/globals.scss';
import {App} from './App/App';
import { Layout } from './layout/Layout';
import { AppContextProvider } from './context/app.contex';
import { SortType } from './enums/sortType.enum';

ReactDOM.render(
  <React.StrictMode>
		<AppContextProvider 
			sort={SortType.CHEAP} 
			selected={[true, true, true, true,true]}
			tickets={[]}
		>
			<Layout>
				<App />
			</Layout>
		</AppContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
