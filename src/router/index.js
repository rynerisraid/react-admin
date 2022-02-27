import { Component } from "react"
import { BrowserRouter,Routes,Route } from "react-router-dom"
import App from '../App'
import Login from '../pages/login'
import Admin from '../pages/admin'

export default class Router extends Component{
    render(){
        return (
            <BrowserRouter>
                <App>
                    <Routes>
                        <Route path="/login" element={<Login/>}></Route>
                        <Route path="/Admin" element={<Admin/>}></Route>
                    </Routes>
                </App>
            </BrowserRouter>
        );
    }
}