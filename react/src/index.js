import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware} from 'redux';
import reducers from './reducers/reducer';

const composeEnhancers = composeWithDevTools({});

const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));

const rootElement = document.getElementById('root')

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    rootElement
)

