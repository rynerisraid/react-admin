import React from "react";
import LeftNav from "../../common/component/LeftNav";
import { Outlet } from "react-router-dom";
import Header from "../../common/component/Header";
import Footer from "../../common/component/Footer";
import './index.css'

export default class Admin extends React.Component{
    render(){
        return (
            <div className="container">
                <div className="nav-left"><LeftNav/></div>
                <div className="main-right">
                    <div className="header"><Header/></div>
                    <div className="content"><Outlet/></div>
                    <div className="footer"><Footer/></div>
                </div>
            </div>
        )
    }
}