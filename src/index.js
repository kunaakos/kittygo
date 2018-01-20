import React from 'react';
import ReactDOM from 'react-dom';

import store from "./store/index";
import { addCat, addCats } from "./actions/index";

import './index.css';

import App from './components/App/App';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <App />,
    document.getElementById('root')
);

// temp, for testing
window.store = store;
window.addCat = addCat;
window.addCats = addCats;
store.subscribe((state) => console.log(store.getState()))

registerServiceWorker();
