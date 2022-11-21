import React, { useState } from 'react';

const  ToogleFunction = () => {
  // Declare a new state variable, which we'll call "count"  
  const [onOff, setOnOff] = useState(true);

  const HandleEvent = (e) =>{
      setOnOff(!onOff);
      e.preventDefault();
  }

  return (
    <div>
      <button onClick={HandleEvent}>
        {onOff ? 'On': 'off'}
      </button>
    </div>
  );
}

export default ToogleFunction