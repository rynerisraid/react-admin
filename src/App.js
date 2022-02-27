import logo from './logo.svg';
import './App.css';
import React from 'react';

export default class App extends React.Component{
  
  constructor(props){
    super(props);
  }

  render(){
    return (
        <div>
          {this.props.children}
        </div>
      // <BrowserRouter>
      //   <Routes>
      //     <Route path='/' element={<App/>}></Route>
      //     <Route path='/login' element={<Login/>}></Route>
      //     <Route path='/admin' element={<Admin/>}></Route>
      //   </Routes>
      // </BrowserRouter>
    )
  }
};
