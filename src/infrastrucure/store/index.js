import {createStore} from 'redux';
import { plusOne as plusOneReducer } from '../redux/plusOne/reducer';


export const store = createStore(plusOneReducer);


//import rootReducer from '../redux/rootReducer';
//导入reducer
//import { reduxDemoReducer } from '../redux/reduxDemo/reducers';
//import {counter} from '../redux/counter/reducers'

//export const store = createStore(reduxDemoReducer);