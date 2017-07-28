import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware, } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';

import App from './components/App';
import reducer from './reducers';
import { watchIncrementAsync } from './sagas';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
	reducer,
	applyMiddleware(sagaMiddleware)
);
sagaMiddleware.run(watchIncrementAsync);

store.subscribe(()=>console.log(store.getState()));

render(
	<Provider store={store} >
		<App />
	</Provider>,
	document.getElementById('root')
)