import React from "react";
//1.导入connect
import { connect } from "react-redux";
class PlusOne extends React.Component{

    //4.组件中使用
    handlClick=()=>{
        console.log("PlusOne", this.props);
        //发送Action
        this.props.sendAction();
    };


    render(){
        return (
            <button onClick={this.handlClick}>PlusOne</button>
        );
    }
}

/**
 * 3.实现connect的第二个参数，用来发送action，这个函数的返回值是一个对象
 * { key: 方法名, value:调用dispatch}
 * @param {*} dispatch 
 */
const mapDispatchToProps=(dispatch)=>{
    return {
        sendAction:()=>{
            //利用dispatch发送一个action，传递action对象，要定义一个type属性
            dispatch({
                type:'ADD ACTION'
            })
        }
    }
};

//PlusOne为消息发送方，2.组件加强
//connect(要接受数据的函数，要发送action的函数)(放入要加强的组件)
export default connect(null,mapDispatchToProps)(PlusOne);