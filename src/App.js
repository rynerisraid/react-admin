import routesConfig from './infrastrucure/route/routeConfig';
import {hot,setConfig} from 'react-hot-loader';
import { Routes, Route,BrowserRouter} from 'react-router-dom';
import Login from './domain/Login';

import './App.css';
import React from 'react';
import RouteConfig from './infrastrucure/route/routeConfig';


// function renderRouteConfig(routes, contextPath){
//   const children = []; // children component list
  
//   const renderRoute = (item,routeContextPath)=>{
//     let newContextPath;
//     if (/^\//.test(item.path)) {
//       newContextPath = item.path;
//     } else {
//       newContextPath = `${routeContextPath}/${item.path}`;
//     }
//     newContextPath = newContextPath.replace(/\/+/g, '/');
    
//     if (item.component && item.childRoutes) {
//       const childRoutes = renderRouteConfig(item.childRoutes, newContextPath);
//       children.push(
//         <Route
//           key={newContextPath}
//           element={props => <item.component {...props}>{childRoutes}</item.component>}
//           path={newContextPath}
//         />,
//       );
//     } else if (item.component) {
//       children.push(
//         <Route key={newContextPath} element={item.component} path={newContextPath} exact />,
//       );
//     } else if (item.childRoutes) {
//       item.childRoutes.forEach(r => renderRoute(r, newContextPath));
//     }
   
//   };

//   routes.forEach(item => renderRoute(item, contextPath));
//   // Use Routes so that only the first matched route is rendered.
//   return <Routes>{children}</Routes>;

// }


  
class App extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    
    return (
    <div>
      <BrowserRouter>
        <RouteConfig/>
      </BrowserRouter>
    </div>
    )
  }
}



export default hot(module)(App);
//export default App;
