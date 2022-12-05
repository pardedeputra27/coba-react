import React from "react";
import "./BlogPost.css";
import "./form.css"
import Post from "./Post";
import axios from "axios";

class BlogPost extends React.Component{
    state ={
        post:[],
        failed:true,
        update:false,
        formBlogPost:{
            userId:0,
            id :0,
            title:"",
            body:""
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
        if (!this.state.update) {
            formBlogPostNew['id'] = timeStamp; 
        }
        this.setState({
            formBlogPost:formBlogPostNew
        })
        e.preventDefault();
    }

    handleSubmit =(e)=>{
       this.state.update ? this.update() :this.add();
       e.preventDefault();
    }
    blankState = (e) =>{
        this.renderAPI();
        this.setState({
            update:false,
            formBlogPost:{
                userId:0,
                id :0,
                title:"",
                body:""
            }
         });
    }


    update = ()=>{
        axios.put(`http://localhost:3001/posts/${this.state.formBlogPost.id}`,this.state.formBlogPost)
        .then((response)=>{
            this.blankState();
        })
    }
    add =()=>{
        axios.post('http://localhost:3001/posts',this.state.formBlogPost)
        .then((response)=> {
            this.blankState();
        })
        .catch((error)=> {
            console.log(error);
          });
    }

    handleUpdate = (data) => {
        //console.log(data);
        this.setState({
            update:true,
            formBlogPost:data
        })
    }
    render(){
        return(

            <React.Fragment>
            <p className="section-title">Blog post</p>
            <div className="container-form">
                <label >Insert Title</label>
                <input type="text" name="title" value={this.state.formBlogPost.title} placeholder="Your title.." onChange={this.handleOnChange} />
                <label>Inser Body</label>
                <input type="text" name="body"  value={this.state.formBlogPost.body} placeholder="Your body.." onChange={this.handleOnChange}/>
                <button onClick={this.handleSubmit} className ="button-submit">SUBMIT</button>
            </div>

            {
            this.state.failed?<h5 className="section-title">Loading...</h5>:this.state.post.map((value,index,array)=>{
                //console.log('value',value.id)
                return <Post key={value.id} data={value} remove ={this.handleRemove} update = {this.handleUpdate} />

            })
            }
            </React.Fragment>
         
        )
    }
}

export default BlogPost 

