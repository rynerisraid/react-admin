import React from "react";
import { Route} from 'react-router-dom';
import Admin from "../../../domain/Admin";
import WelcomePage from "../../../domain/Welcome";
import Dashboard from "../../../domain/Dashboard";

const WelcomeRoute = <Route path='welcome' element={<WelcomePage/>}></Route>
const DasbBoardRoute =  <Route path='dashboard' element={<Dashboard/>}></Route>


export const AdminRoute = <Route path="/admin" element={<Admin/>}>
                            {WelcomeRoute}
                            {DasbBoardRoute}
                          </Route>

