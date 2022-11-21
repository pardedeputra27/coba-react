 import React,{useState} from "react";
function FormSubmit() {
    const [count,setCount] = useState(0);
    function handleSubmit(e) {
        setCount((prev)=>
            prev+1 
        );
        e.preventDefault();    
    }
  
    return (
     <div>
        <h3>You {count} Cliked</h3>
        <form onSubmit={handleSubmit}>
            <button type="submit">Submit</button>
        </form>
     </div>
    );
  }

  export default FormSubmit