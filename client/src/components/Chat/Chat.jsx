import React, { useRef, useState, useEffect } from 'react';

export default function Chat({ socket }) {
  const messageRef = useRef();
  const [messageList, setMessageList] = useState([]);

  useEffect(() => {
    if (!socket) return;

    socket.on('receive_message', (data) => {
      setMessageList((current) => [...current, data]);
    });

    return () => socket.off('receive_message');
  }, [socket]);

  const handleSubmit = () => {
    const message = messageRef.current.value;
    if (!message.trim()) return;

    socket.emit('message', message);
    clearInput();
  };

  const clearInput = () => {
    messageRef.current.value = '';
  };

  return (
    <div className="chat-container">
      <div className="chat-box">
        <div className="chat-messages">
          {messageList.map((message, index) => (
            <div key={index} className={`message ${message.authorId === socket.id ? 'sent' : 'received'}`}>
              <span className="author">{message.author}</span>
              <p>{message.text}</p>
            </div>
          ))}
        </div>
        <div className="chat-input">
          <input type="text" placeholder="Mensagem" ref={messageRef} />
          <button onClick={handleSubmit}>
            <i className="send-icon">➤</i>
          </button>
        </div>
      </div>
    </div>
  );
}
