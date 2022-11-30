import React from "react";
// import YoutubeComp from "../../components/YoutubeComp/YoutubeComp";
// import Product from "../produk/Product";
import LifeCycleComp from "../lifeCycle/LifeCycleComp";

class Home extends React.Component{
    state = {
        showComponent :true
    }
    componentDidMount(){
        // setTimeout(() => {
        //     this.setState({
        //         showComponent:false
        //     })
        // },10000);
        
    }
    render (){
        return (
            <div>
                {/* <h1>React Component</h1>
                <hr />
                <YoutubeComp time='12.1'  title = "Belajar react Bagian 1"  desc ="1x ditonton 12 hari yang lalu" />
                <YoutubeComp time='21.2' title = "Belajar react Bagian 2"  desc ="1xxx ditonton 240 hari yang lalu"/>
                <YoutubeComp time='22.4' title = "Belajar react Bagian 4"  desc ="2jt ditonton 2 tahun yang lalu"/>
                <YoutubeComp />
                <hr />
                <Product />
                <hr /> */}
                <h1>React LifeCyle</h1>
                <hr />
                 { this.state.showComponent && <LifeCycleComp /> }
            </div>
    
        );
    }
}

export default Home;