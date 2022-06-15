import React from 'react';
import ReactDOM from 'react-dom';
import './styles/globals.scss';
import {App} from './App/App';
import { Layout } from './layout/Layout';
import { AppContextProvider, initialStore } from './context/app.contex';


ReactDOM.render(
  <React.StrictMode>
		<AppContextProvider 
			{...initialStore}
		>
			<Layout>
				<App />
			</Layout>
		</AppContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
