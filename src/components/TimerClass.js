import React from "react";



class TimerClass extends React.Component{
    constructor(props) {
        super(props);
       this.state = {
        date: new Date(),
        time: props.start,
    };  
    }
    
    //LifeCycle

    componentDidMount(){
        //setInterval(fungsi,timerDalamMilliSecond)
        this.addInterval = setInterval(()=> this.buatJam(),1000);
    }
    componentWillUnmount(){
        //clearInterval(nameInterval);
        clearInterval(this.addInterval);
    }
    buatJam(){
        //update state setiap detik
        this.setState((state,props)=>({
            time: parseInt(state.time)+1,
            date: new Date()
        })
        );
    }
      render() {
        return (
          <div>
            <h2>It is {this.state.time} Detik.</h2>
            <h2>{this.state.date.toLocaleDateString} </h2>
          </div>
        );
      }

}

export default TimerClass