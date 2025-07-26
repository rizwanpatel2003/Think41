import React from 'react'
import Message from './Message';
function MessageList({messages}) {
    return (
        <div style={{ padding: '20px', border: '1px solid #ccc', borderRadius: '5px', maxHeight: '400px', overflowY: 'auto' }}>
            {messages.map((msg, index) => (
                <Message key={index} text={msg.text} sender={msg.sender} /> ))}
        </div>
    )
}

export default MessageList
