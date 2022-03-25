import { Component } from "react";

export default class CounterNotRedux extends Component{
    
    state = {
        count: 0 
    }

    UpdateCount(cnt){
        return ()=>{
            if(this.state.count + cnt >=0){
                this.setState({count:this.state.count+cnt});
            }
        }
    }

    UpdateCountAsync(cnt){
        return ()=>{
            setTimeout(() => {
                if(this.state.count + cnt >=0){
                    this.setState({count:this.state.count+cnt});
                }
            }, 1000);
        }
    }

    ResetCount(){
        return ()=>{
            this.setState({count:0})
        }
        
    }
    

    render(){
        return (
            <div>
                点击了{this.state.count}次
                <button onClick={this.UpdateCount(1)}>同步加</button>
                {' '}
                <button onClick={this.UpdateCount(-1)}>同步减</button>
                {' '}
                <button onClick={this.UpdateCountAsync(1)}>异步加</button>
                {' '}
                <button onClick={this.UpdateCount(-1)}>同步减</button>
                {' '}
                <button onClick={this.ResetCount()}>归零</button>
            </div>
        )
    }
}