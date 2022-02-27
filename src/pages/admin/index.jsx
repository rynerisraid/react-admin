import React from "react";
import Header from "../../components/header";
import Footer from "../../components/footer";
import NavLeft from "../../components/leftnav";
import Home from "../../components/home"

import {Row, Col} from "antd";
import { Box, Button,Flex,Text,Heading } from "rebass";


export default class Admin extends React.Component{
    render(){
        return (
            <Row className="container">
                <Col span={3} className="nav-left">
                    <NavLeft></NavLeft>
                </Col>
                <Col spam={21} className="main">
                    <Header ></Header>
                    <Row className="content">
                        <Home></Home>
                    </Row>
                    <Footer></Footer>
                </Col>
            </Row>
        )
    }
}