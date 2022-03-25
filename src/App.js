import {hot} from 'react-hot-loader';
import { BrowserRouter} from 'react-router-dom';
import './App.css';
import React from 'react';
import RouteConfig from './infrastrucure/route/routeConfig';

class App extends React.Component{

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

export default App;
//export default hot(module)(App);
