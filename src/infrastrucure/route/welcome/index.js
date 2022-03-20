import React from "react";
import { Route} from 'react-router-dom';
import WelcomePage from "../../../domain/Welcome";

export const WelcomeRoute = <Route path='welcome' element={<WelcomePage/>}></Route>;

