import logo from "./logo.svg";
import "./App.css";

import React, { useRef } from "react";

function Mailbox(props) {
  const unreadMessages = props.unreadMessages;
  return (
    <div>
      <h1>Hello!</h1>
      {(unreadMessages.length > 0) ? 
        <h2> You have {unreadMessages.length} unread messages. </h2> : <h1>oke</h1>
      }
    </div>
  );
}

function App() {
  const messages = ["React", "Re: React", "Re:Re: React","syalom"];
  return (
    <>
      <Mailbox unreadMessages={messages} />
    </>
  );
}

export default App;
