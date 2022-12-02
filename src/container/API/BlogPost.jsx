import React from "react";
import "./BlogPost.css";
import "./form.css"
import Post from "./Post";
import axios from "axios";

class BlogPost extends React.Component{
    state ={
        post:[],
        failed:true,
        formBlogPost:{
            userId:1,
            id :1,
            title:"this is Title",
            body:"this is Body"
        }
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
        axios.get('http://localhost:3001/posts?_sort=id&_order=desc')
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

    handleOnChange =(e)=>{
        let formBlogPostNew = {...this.state.formBlogPost};
        let timeStamp = new Date().getTime();
        formBlogPostNew[e.target.name] = e.target.value;
        formBlogPostNew['id'] = timeStamp;
       // console.log(timeStamp);
        this.setState({
            formBlogPost:formBlogPostNew
        },()=>{
            //console.log(this.state.formBlogPost);
        })
        
    }

    handleSubmit =()=>{
        axios.post('http://localhost:3001/posts',this.state.formBlogPost)
        .then((response)=> {
             this.renderAPI();
            console.log(response);
          })
        .catch((error)=> {
            console.log(error);
          });
    }
    render(){
        return(

            <React.Fragment>
            <p className="section-title">Blog post</p>
            <div className="container-form">
                <label >Insert Title</label>
                <input type="text" id="fname" name="title" placeholder="Your title.." onChange={this.handleOnChange} />
                <label>Inser Body</label>
                <input type="text" id="lname" name="body" placeholder="Your body.." onChange={this.handleOnChange}/>
                <button onClick={this.handleSubmit} className ="button-submit">SUBMIT</button>
            </div>

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

