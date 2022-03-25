import React from "react";
//导入Store
import { store } from "../../infrastrucure/store";
//导入action 构建函数
import { sendAction } from "../../infrastrucure/redux/reduxDemo/actions";
import PlusOne from "../../common/component/PlusOne";
import PrintDemo from "../../common/component/PrintDemo";

export default class ReduxDemo extends React.Component{
    
    handleClick = () =>{
        const action = sendAction();
        //发送一个action
        store.dispatch(action)
    };

    //当组件加载完毕的时候进行监听
    componentDidMount(){
        store.subscribe(()=>{
            console.log("ReduxDemo",store.getState())
            //用于刷新组件的状态
            this.setState({});
        })
    }
    render(){
        return (
            <>
            <button onClick={this.handleClick}>点我发送一个Action</button>
            <div>{JSON.stringify(store.getState())}</div>
            {' '}
            <br/>
            <PlusOne/>
            <PrintDemo/>
            </>
        )
    }
}

