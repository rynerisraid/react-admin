import React  from "react"
import { Routes,Route } from "react-router-dom"
import Login from '../pages/login'
import Admin from '../pages/admin'
import Home from "../pages/home"
import About from "../pages/about"

export default class IdxRouter extends React.Component{
    render(){
        return (        
            <Routes>
                <Route path="/login" element={<Login/>}></Route>
                <Route path="/admin" element={<Admin/>}>
                    <Route path="home" element={<Home/>}></Route>
                    <Route path="about" element={<About/>}></Route>
                </Route>
            </Routes>
        );
    }
}