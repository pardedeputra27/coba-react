import React from "react";
import "./BlogPost.css"
class Post extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            data:props.data,
        }
    }
    render(){
        return(
            <div className="post">
                <div className="img-thumb">
                    <img src="https://placeimg.com/200/150/tech" alt="" />
                </div>
                <div className="content">
                    <p className="title">{this.state.data.title}</p>
                    <p className="desc">{this.state.data.body}</p>
                    <button className="remove" onClick={()=>this.props.remove(this.state.data.id)}>Remove</button>
                </div>

            </div>
        )
    }
}

export default Post 

