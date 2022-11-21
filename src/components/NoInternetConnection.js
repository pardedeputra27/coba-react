import React,{useState,useEffect} from "react";

const NoInternetConnection = (props) => {
    // state variable holds the state of the internet connection
    const [isOnline, setOnline] = useState(true);

    // On initization set the isOnline state.
    useEffect(()=>{
        setInterval(() => {
           // console.log('isOnline : ',isOnline);
            setOnline(navigator.onLine);
          }, 1000);
    },[])
    // if user is online, return the child component else return a custom component (Connectifitas di cek di browser)
    if(isOnline){
        return(props.children)
    } else {
        return(<h1>No Internet Connection. Please try again later.</h1>)
    }
}

export default NoInternetConnection;