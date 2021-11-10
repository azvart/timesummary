import RootReducer from './rootReducer';
import {createStore, applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';


export const store = createStore(RootReducer,undefined, composeWithDevTools(applyMiddleware(thunk)));