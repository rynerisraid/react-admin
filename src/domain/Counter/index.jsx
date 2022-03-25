import React from "react";
import PropTypes from 'prop-types';
import { store } from "../../infrastrucure/store";
import { increment,decrement,incrementIfOdd,incrementAsync } from "../../infrastrucure/redux/counter/actions";


export default class Counter extends React.Component{

    increment = () =>{
        const action = increment();
        //发送一个action
        store.dispatch(action)
    };

    decrement = () =>{
        const action = decrement();
        //发送一个action
        store.dispatch(action)
    };

    incrementIfOdd = () =>{
        const action = incrementIfOdd();
        //发送一个action
        store.dispatch(action)
    };

    incrementAsync = () =>{
        const action = incrementAsync();
        //发送一个action
        store.dispatch(action)
    };

    //当组件加载完毕的时候进行监听
    componentDidMount(){
        store.subscribe(()=>{
            console.log("Counter",store.getState())
            //用于刷新组件的状态
            this.setState({});
        })
    }

    render(){
        return (
            <p>
            Clicked: {store.getState().value} times
            {' '}
            <button onClick={this.increment}>+</button>
            {' '}
            <button onClick={this.decrement}>-</button>
            {' '}
            <button onClick={this.incrementIfOdd}>Increment if odds</button>
            {' '}
            <button onClick={this.incrementAsync}>Increment async</button>
            </p>
            
        )
    }
}
Counter.propTypes = {
    value: PropTypes.number.isRequired,
    increment: PropTypes.func.isRequired,
    incrementIfOdd: PropTypes.func.isRequired,
    incrementAsync: PropTypes.func.isRequired,
    decrement: PropTypes.func.isRequired
};

