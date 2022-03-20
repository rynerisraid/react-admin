import React from "react";
import './index.css';

export default class Header extends React.Component{

    constructor(props){
        super(props)
        this.state = {username:'React Boy'}
    }

    render(){
        return (
            <div>
                <div className="header-top">
                    欢迎{this.state.username}登录系统
                </div>
                
                <div className="header">
                    头部第二行
                </div>
            </div>
        )
    }
}