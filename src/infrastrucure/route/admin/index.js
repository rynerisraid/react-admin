import React from "react";
import { Route} from 'react-router-dom';
import Admin from "../../../domain/Admin";
import WelcomePage from "../../../domain/Welcome";
import Dashboard from "../../../domain/Dashboard";
//import Counter from "../../../domain/Counter";
import CounterNotRedux from "../../../common/component/CounterNotRedux";
import Counter from "../../redux/counter/containers"


const WelcomeRoute = <Route path='welcome' element={<WelcomePage/>}></Route>
const DasbBoardRoute =  <Route path='dashboard' element={<Dashboard/>}></Route>
const CounterRoute = <Route path='counter' element={<Counter/>}/>
const CounterNotReduxRoute = <Route path='CounterNotRedux' element={<CounterNotRedux/>}></Route>

export const AdminRoute = <Route path="/admin" element={<Admin/>}>
                            {WelcomeRoute}
                            {DasbBoardRoute}
                            {CounterRoute}
                            {CounterNotReduxRoute} 
                          </Route>



