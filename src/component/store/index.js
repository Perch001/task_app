import { createStore } from "redux";
import {customerReducer} from './reducer/customer'


export const store = createStore(customerReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())