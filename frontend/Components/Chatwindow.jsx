import React from 'react'
import MessageList from './MessageList';
import UserInput from './UserInput';
import
function Chatwindow() {
    const { messages } = React.useContext(ChatContext);
    return (
        <div className='chat-window' style={{ padding: '20px', border: '1px solid #ccc', borderRadius: '5px', maxHeight: '500px', overflowY: 'auto' }}>
            <h3>Ecommerce Chatbot</h3>
            <MessageList  messages={messages}/>
            <UserInput></UserInput>
        </div>
    )
}

export default Chatwindow
