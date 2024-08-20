import React, { useState } from 'react';
import Join from './components/Join/Join';
import Chat from './components/Chat/Chat';
import './App.css';

function App() {
  const [chatVisibility, setChatVisibility] = useState(false);
  const [socket, Setsocket] = useState(null);

  return (
    <div className="App">
      {chatVisibility ? (
        socket ? <Chat socket={socket} /> : <div>Conectando...</div>
      ) : (
        <Join Setsocket={Setsocket} setChatVisibility={setChatVisibility} />
      )}
    </div>
  );
}

export default App;
