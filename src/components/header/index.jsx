import React from "react";
import {Row, Col} from "antd";

export default class Header extends React.Component{
    
    state={username:"张三"}

    render(){
        return (
            <div>
               <Row className="header-top">
                   <Col span={24}>
                       <span>欢迎{this.state.username}登录系统</span>
                   </Col>
               </Row>
               <Row className="header">
                   <Col span={4} className="header-title">首页</Col>
                   <Col span={20} className="header-date">
                       <span>2022-02-27</span>
                   </Col>
               </Row>
            </div>
        )
    }

}