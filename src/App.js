import React, { useState } from 'react'

const App = () => {

  // const [messageInput, setMessageInput] = useState('')
  // const sendMsg = () => {
  //   console.log(messageInput);
  // }
  const [counter, setCounter] = useState(0)

  return (
    <>
      {/* <div className="container border my-5 p-5">
        <div className="messageContainer bg-secondary container text-white p-4">
          <div className="messageLeft bg-primary rounded p-2 m-2 text-start">freind</div>
          <div className="messageRight bg-primary rounded p-2 m-2 text-end">Me</div>
        </div>
        <div className='text-center bg-dark p-2'>
          <input type="text"
            className='p-2 mx-2'
            placeholder="Type a message"
            value={messageInput}
            onChange={e => setMessageInput(e.target.value)}
          />
          <div className="btn btn-primary" onClick={sendMsg}>Send</div>
        </div>
      </div> */}
      <div className='border m-5 p-5 text-center'>
        <button className="btn btn-primary" onClick={() => setCounter(counter + 1)}>+</button>
        <span className='border mx-5 rounded p-1'>{counter}</span>
        <button className="btn btn-primary" onClick={() => setCounter(counter - 1)}>-</button>
      </div>


    </>
  )
}

export default App;