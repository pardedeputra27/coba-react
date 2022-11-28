import React from "react";
import "./YoutubeComp.css"
import fotoChanel from "./channel.jpg"

const YoutubeComp = (props) =>{
    return (<div className="youtube-wrapper">
         <div className="img-thumb">
            <img src={fotoChanel} alt="No Image" />
            <p className="time">{props.time}</p>
         </div>
        <p className="title">{props.title}</p>
        <p className="desc">{props.desc}</p>
    </div>);
}

YoutubeComp.defaultProps ={
      time: "11.11",
      title:"Title Here",
      desc: "Description here"
}

export default YoutubeComp