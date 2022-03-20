import React from 'react';
import { Link } from 'react-router-dom';
import './index.css';
import '../../../App.css';
import logo from '../../../logo.svg';

export default class LeftNav extends React.Component{
    render(){
        return(
            <div className="side-panel">
                <img src={logo} className="nav-logo" alt="logo" />
                <span className="nav-brand">React Admin</span>

                <div className="nav-content">
                    <ul>
                        <li>
                            <Link to="/">Login</Link>
                        </li>
                    </ul>

                    <ul>
                        <li>
                            <Link to="dashboard">Dashboard</Link>
                        </li>
                        <li>
                            <Link to="welcome">Weclome</Link>
                        </li>
                    </ul>
                

                </div>

            </div>
        )
    }
}