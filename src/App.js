import { useState } from "react"
 
function App() {
  const [title, setTitle] = useState("Hello World");
 
  const changeTitle = () => {
    setTitle("Title Changed");
  }
 
  return (
    <div>
      <h1>{ title }</h1>
      <button onClick={ changeTitle }>Change Title</button>
    </div>
  );
}
 
export default App;