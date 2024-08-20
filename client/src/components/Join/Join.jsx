import React, { useRef } from 'react';
import io from 'socket.io-client';

export default function Join({ setChatVisibility, Setsocket }) {
  const usernameRef = useRef();

  const handleSubmit = async () => {
    const username = usernameRef.current.value;
    if (!username.trim()) return;

    const socket = await io.connect('http://localhost:3001');
    socket.emit('set_username', username);
    Setsocket(socket);
    setChatVisibility(true);
  };

  return (
    <div>
      <h1>Join</h1>
      <input type="text" placeholder="Nome de usuário" ref={usernameRef} />
      <button onClick={handleSubmit}>Entrar</button>
    </div>
  );
}
