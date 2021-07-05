import {createStore, applyMiddleware} from 'redux';
import { composeWithDevTools} from  'redux-devtools-extension';
import thunk from 'redux-thunk';
import { combineReducers} from 'redux';
import {emailListReducer, addEmailInfoReducer} from './redux/reducers/emailReducer';


const reducer = combineReducers({
emailList: emailListReducer,
addEmailInfo: addEmailInfoReducer
});


const initialState = {};


const middleware = [thunk];

const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)));

export default store;