import React  from "react";
import geprek from "./src/geprek.jpg"

class CardProduct extends React.Component{   
    constructor(props){
        super(props);
        this.state = {
            order : 0
        }
    
    }
    handleChangeOrder =(newValue)=>{
        this.props.onOrder(newValue)
    }
    handleMinus = () =>{
        this.setState({
            order: this.state.order -1
        },()=>{
            this.handleChangeOrder(this.state.order);
        });
    } 

    handlePlus = () =>{
        this.setState({
            order: this.state.order +1
        },()=>{
            this.handleChangeOrder(this.state.order);
        });
    } 
   
    render(){
        return (
            <div className="card">
                <div className="img-thumb-prod">
                    <img src={geprek} alt="geprek" />
                </div>
                <p className="product-title">Daging ayam rasa Sambalado 3x Lebih hemat</p>
                <p className="product-price">Rp.340.000</p>
                <div className="counter">
                    <button className="minus" onClick={this.handleMinus}>-</button>
                    <input type="text" value={this.state.order}/>
                    <button className="plus" onClick={this.handlePlus}>+</button>
                </div>
            </div>
        );
    }
}

export default CardProduct