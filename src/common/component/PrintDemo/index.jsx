import React from "react";

import { connect } from "react-redux";

class PrintDemo extends React.Component{



    render(){
        
        console.log("PrintDemo:",this.props)
        return (
            <>
            <div>
                组件PrintDemo
            </div>
            <div>
                {this.props.count}
                
            </div>
            </>
        );
    }
}


/**
 * 接收两个参数
 * @param {*} state 
 */
const mapStateToProps=(state)=>{
    console.log("PrintDemo",state)
    return state;
}


//PrintDemo组件的接收方
export default connect(mapStateToProps)(PrintDemo);