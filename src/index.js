import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './registerServiceWorker';

// import {BrowserRouter} from 'react-router-dom'
// import {createStore} from 'redux'
// import {Provider} from 'react-redux'
// import  Reducer from './redux/reducers'
// const store =createStore(Reducer)

// import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
        <App />
    
    , document.getElementById('root'));
serviceWorker.unregister();
