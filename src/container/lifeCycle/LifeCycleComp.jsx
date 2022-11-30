import React from "react";

class LifeCycleComp extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            count :1
        }

        console.log('constructor')
    }

    static getDerivedStateFromProps(nextPorps,prevSTATE){
            console.log('getDerivedStateFromProps')
            return null;
    }
    
    componentDidMount(){
        console.log('componentDidMount');
        // setTimeout(()=>{
        //     this.setState({
        //         count : 2
        //     })
        // },3000)
        
    }

    shouldComponentUpdate(nextPorps,nextState){
        console.group('shouldComponentUpdate');
       // console.log('nextProps',nextPorps);
        console.log('nextState',nextState);
        console.log('This state',this.state);
        console.log( 'type ' ,typeof nextState.count);
        console.groupEnd();

        if(nextState.count > 5){
            return false;
        }

        return true;
    }
    getSnapshotBeforeUpdate(){
        console.log('getSnapshotBeforeUpdate');
        return null;
    }
    componentDidUpdate(){
        console.log('componentDidUpdate')
    }

    componentWillUnmount(){
        console.log('componentWillUnmount')
    }
    changeCount = () =>{
            this.setState({
                count: this.state.count + 1
            })
    }
    render(){
        return (
            <div>
                <button onClick={this.changeCount}>{this.state.count}</button>
            </div>
        );
    }
}

export default LifeCycleComp