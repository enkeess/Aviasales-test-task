import React from 'react';
import ReactDOM from 'react-dom';
import './scss/globals.scss';
import { App } from './App/App';
import { ErrorBoundary } from './components/ErrorBoundary';
import { Provider } from 'react-redux';
import store from './redux/store';

ReactDOM.render(
    //   <React.StrictMode>
    <ErrorBoundary>
        <Provider store={store}>
            <App />
        </Provider>
    </ErrorBoundary>,
    //   </React.StrictMode>,
    document.getElementById('root')
);
