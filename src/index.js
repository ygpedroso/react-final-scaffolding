import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Store from './redux/store';
import Router from './router';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

const EntryPoint = () => (
    <Provider store={Store}>
        <Router />
    </Provider>
);

ReactDOM.render(<EntryPoint />, document.getElementById('root'));
registerServiceWorker();
