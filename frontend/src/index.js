import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/store'
import './index.css';
import App from './components/App';
import * as serviceWorker from './serviceWorker';

const store = configureStore();

const jsx = (<Provider store={store}><App /></Provider>);

ReactDOM.render(jsx, document.getElementById('root'));
serviceWorker.unregister();