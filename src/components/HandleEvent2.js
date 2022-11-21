import React from "react";

class ToogleClass extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            toogleStatus:true
        }
        this.handleCliked = this.handleCliked.bind(this);
    }

    handleCliked(){
        this.setState((state,props)=>({
           toogleStatus: !state.toogleStatus
        })
        )
        //console.log(this.state.toogleStatus);
    }

    render(){
        return (
            <div>
                <button onClick={this.handleCliked}>{this.state.toogleStatus?
                'Active':'NonActive'}</button>
            </div>
        )
    }


}

export default ToogleClass