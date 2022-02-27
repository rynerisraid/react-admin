import React, { Children } from "react";
import { Menu, Button } from 'antd';
import {
  AppstoreOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  PieChartOutlined,
  DesktopOutlined,
  ContainerOutlined,
  MailOutlined,
} from '@ant-design/icons';



const { SubMenu } = Menu;

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
                    <SubMenu title={item.title} key={item.id}>
                        {this.createMenu(item.children)}
                    </SubMenu>
                );
            }

            return (
                <Menu.Item title={item.title} key={item.id}>
                    {item.title}
                </Menu.Item>
            );

        })
    }

    render() {
        return (
          <div style={{ width: 256 }}>
              
            {/* <Button type="primary" onClick={this.toggleCollapsed} style={{ marginBottom: 16 }}>
              {React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined)}
            </Button> */}
            <Menu
              defaultSelectedKeys={['1']}
              defaultOpenKeys={['sub2']}
              mode="inline"
              theme={this.state.theme}
              inlineCollapsed={this.state.collapsed}
            >
                {this.state.menuTree}
              {/* <SubMenu key="sub2" icon={<AppstoreOutlined />} title="Navigation Two">
                <Menu.Item key="9">Option 9</Menu.Item>
                <Menu.Item key="10">Option 10</Menu.Item>
              </SubMenu> */}
            </Menu>
          </div>
        );
      }
}