import React from "react";
import "./BlogPost.css"
class Post extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            title:props.title,
            desc:props.desc
        }

    }
    render(){
        return(
            <div className="post">
                <div className="img-thumb">
                    <img src="https://placeimg.com/200/150/tech" alt="" />
                </div>
                <div className="content">
                    <p className="title">{this.state.title}</p>
                    <p className="desc">{this.state.desc}</p>
                </div>
            </div>
        )
    }
}

export default Post 

