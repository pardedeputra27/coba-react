import React from "react";
import List from "./List";

class FormSubmit extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            todoItem:"",
            item:[]
        }
    }
    
    handleSubmit = (e) => {
        e.preventDefault();
        this.setState({
            // item:this.state.item.concat(this.state.todoItem) // cara pertama
            item : [...this.state.item,this.state.todoItem],
            todoItem: ''
        })
    }
    handleChange = (e) => {
        this.setState({
            todoItem:e.target.value
        });

    }
    
    render(){
        return (
        <div>
          <form onSubmit={this.handleSubmit}> 
             <input value={this.state.todoItem} onChange={this.handleChange} ></input>
            <button>
                Submit
            </button>
          </form> 
          <List items={this.state.item} /> 
        </div>
        );
    }
}

export default FormSubmit