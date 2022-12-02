import React from "react";
import "./BlogPost.css"
import Post from "./Post";
import axios from "axios";

class BlogPost extends React.Component{
    state ={
        post:[],
    }
    componentDidMount(){
    //     fetch('https://jsonplaceholder.typicode.com/posts')
    //     .then(response => response.json())
    //     .then(json => 
    //     this.setState({post: json},()=>{
    //         console.log(json)
    //     })
    // );

    axios.get('http://localhost:3001/posts')
    .then((response)=> {
        //console.log(response);
        this.setState({
            post:response.data,
        })
    })

      
    }
    render(){
        return(

            <React.Fragment>
            <p className="section-title">Blog post</p>
            {
            this.state.post.map((value,index,array)=>{
                //console.log('value',value.id)
                return <Post key={value.id} title = {value.title} desc = {value.body}/>

            })
            }
            </React.Fragment>
         
        )
    }
}

export default BlogPost 

