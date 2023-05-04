import React, { useState } from 'react'
import './App.css';
function App() {
  const [messageInput, setMessageInput] = useState('')
  const sendMsg = () => {
    console.log(messageInput);
  }
  return (
    <>
      <div className="container border mt-5 p-5">
        <div className="messageContainer bg-secondary container text-white p-4">
          <div className="messageLeft bg-primary rounded p-2 m-2 text-start">freind</div>
          <div className="messageRight bg-primary rounded p-2 m-2 text-end">Me</div>
        </div>
        <div className='text-center bg-dark p-2'>
          <input
            type="text"
            placeholder="Type a message"
            className='p-2 mx-2'
            value={messageInput}
            onChange={e => setMessageInput(e.target.value)}
          />
          <div className="btn btn-primary" onClick={sendMsg}>Send</div>
        </div>
      </div>
    </>
  );
}
export default App;