import React from "react";
import "./BlogPost.css"
import Post from "./Post";
import axios from "axios";

class BlogPost extends React.Component{
    state ={
        post:[],
        failed:true,
    }

    componentDidMount(){
    //     fetch('https://jsonplaceholder.typicode.com/posts')
    //     .then(response => response.json())
    //     .then(json => 
    //     this.setState({post: json},()=>{
    //         console.log(json)
    //     })
    // );
        this.renderAPI()
    
    }

    renderAPI =()=>{
        axios.get('http://localhost:3001/posts')
        .then((response)=> {
            //console.log(response);
            this.setState({
                post:response.data,
                failed:false
            })
        })     
    }

    handleRemove = (id) =>{
            console.log('Deleted id = ',id);
            axios.delete(`http://localhost:3001/posts/${id}`).then((result)=>{
                this.renderAPI();
            });
    }
    render(){
        return(

            <React.Fragment>
            <p className="section-title">Blog post</p>
            {
            this.state.failed?<h5 className="section-title">Loading...</h5>:this.state.post.map((value,index,array)=>{
                //console.log('value',value.id)
                return <Post key={value.id} data={value} remove ={this.handleRemove} />

            })
            }
            </React.Fragment>
         
        )
    }
}

export default BlogPost 

