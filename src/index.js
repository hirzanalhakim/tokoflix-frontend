import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import ReduxThunk from 'redux-thunk';
import { Provider } from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import reducers from './reducers';

const  store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'));
registerServiceWorker();
