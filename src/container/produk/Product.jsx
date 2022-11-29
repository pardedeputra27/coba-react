import React  from "react";
import CardProduct from "./CardProduct";
import geprek from "./src/geprek.jpg"

class Product extends React.Component{   
    constructor(props){
        super(props);
        this.state = {
            order : 0
        }
    
    }

    handleChangeOrder = (newValue)=>{
            this.setState({
                order:newValue
            })
    }
    render(){
        return (
        <React.Fragment>
            <div className="header">
                <img src="" alt="" />
            </div>
            <div className="troley">
                <img src="" alt="" />
                <div className="count">{this.state.order}</div>
            </div>
            <CardProduct onOrder = {(newValue)=>{this.handleChangeOrder(newValue)}}/>
        </React.Fragment>
        );
    }
}

export default Product