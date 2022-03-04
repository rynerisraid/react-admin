import React from "react";
import NavLeft from "../../components/leftnav";
import Header from '../../components/header'
import Footer from '../../components/footer'
import { Outlet } from "react-router";

export default class Admin extends React.Component{
    render(){
        return (
            <div className="container">
                <div span={3} className="nav-left">
                    <NavLeft></NavLeft>
                </div>
                <div spam={21} className="main">
                    <Header></Header>
                    <Outlet/>
                    <Footer></Footer>
                </div>
                
            </div>
        )
    }
}