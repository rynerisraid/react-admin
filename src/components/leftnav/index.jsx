import React from "react";
import { Menu,MenuItem } from "@blueprintjs/core";
import {
    Route,
    Link
  } from 'react-router-dom';


export default class NavLeft extends React.Component{
    
    state = {
        theme: 'light',
        current: '1',
        collapsed: false,
        menuTree:[]
      };
    
    changeTheme = value => {
        this.setState({
            theme: value ? 'dark' : 'light'
        });
    };
    
    handleClick = e => {
        console.log('click ', e);
        this.setState({
            current: e.key,
        });
    };
    
    toggleCollapsed = () => {
        this.setState({
            collapsed: !this.state.collapsed
        });
    };

    componentDidMount(){
        this.loadMenu();
    }

    loadMenu(){
        // axois.get('/munus').then((res)=>{

        // });
        var res = {
            data:[
                {
                    id:"2",
                    title:"商品管理",
                    path:"/goods",
                    children:
                    [{
                        id:"3",title:"商品列表",path:"goods/googs-list"
                    },
                    {
                        id:"4",title:"商品详情",path:"goods/googs-info"
                    }]
                },
                {
                    id:"5",
                    title:"用户管理",
                    path:"/user",
                    children:
                    [{
                        id:"6",title:"用户列表",path:"user/user-list"
                    },
                    {
                        id:"7",title:"用户设置",path:"user/user-info"
                    }]
                }
            ]
        }

        const menus = this.createMenu(res.data);
        this.setState({menuTree:menus});
    }

    createMenu(data){
        return data.map((item)=>{
            if(item.children){
                return (
                    <Menu title={item.title} key={item.id}>
                        {this.createMenu(item.children)}
                    </Menu>
                );
            }

            return (
                <MenuItem  title={item.title} key={item.id}>
                    {item.title}
                </MenuItem >
            );

        })
    }

    render() {
        return (
          <div style={{ width: 256 }}>
            		
                <li style={{display:this.props.isLogin?"none":"block"}}>
                    <Link to="/login">Login</Link>
                </li>
                <li>
                    <Link to="/admin/home">Home</Link>
                </li>
                <li>
                    <Link to="/admin/about">About</Link>
                </li>
          </div>
        );
      }
}