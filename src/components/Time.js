import React,{useState,useEffect} from "react";


const Time=(props) =>{
  const [waktu, setWaktu] = useState('');
  useEffect(() => {
    setInterval(() => {
      setWaktu(new Date().toLocaleTimeString());
    }, 1000);
  },[]);

return (
      <div>      
        <h1>Hello, world!</h1>      
        <h2>It is {waktu}.</h2>    
        {/* <h2>It is {props.date}.</h2>     */}
      </div>  
      );
  }
  

export default Time