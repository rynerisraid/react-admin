import PageNotFound from '../../common/component/PageNotFound';
import React from "react";
import { Route,Routes} from 'react-router-dom';
// import {WelcomeRoute} from './welcome';
import {LoginRoute} from './login';
import {AdminRoute} from './admin';

export default class RouteConfig extends React.Component{
    render(){
        return (
            <Routes>
                {/* <Route path="/" element={<Login/>}></Route>
                <Route path='welcome' element={<WelcomePage/>}></Route> */}
                
                {LoginRoute}
                {AdminRoute}
                <Route path="*" element={<PageNotFound/>}></Route>

            </Routes>
        )
    }
}





// const childRoutes = [
//     welcomeRoute,
// ];

// const routes = [{
//     path:'/',
//     component:Login,
//     childRoutes:[
//         ...childRoutes,
//         { path: '*', name:"Page not found",component:PageNotFound},
//     ].filter(r => r.component || (r.childRoutes && r.childRoutes.length > 0))
// }]

// export default routes;
    
  
