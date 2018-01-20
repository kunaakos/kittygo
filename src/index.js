import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import store from "./store/index";
import { addCats } from "./actions/index";

import './index.css';

import App from './components/App/App';

import registerServiceWorker from './registerServiceWorker';
import { canIHazCats } from './data/animals';

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);

// temp, for testing
window.store = store;
window.addCats = (howMany) => {
    store.dispatch(addCats(canIHazCats(howMany)))
}

registerServiceWorker();
