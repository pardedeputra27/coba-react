import React from "react";

class API extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            items:[],
            loading : true
        }

    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response=> response.json())
        .then(data=>this.setState({items:data,loading:false}))
    }

    render(){
        const {items,loading} = this.state ;
        if(loading){
            return <h1>Loading....</h1>;
        }
        return (
            <div>
                {
                    items.map((data,index)=>
                    <div>
                    <li key={index}>Name : {data.name}-({data.email})</li>
                    <li key={index}>Address :{data.address.street}</li>
                    </div>
                    )
                }
            </div>
        )
    }

}

export default API