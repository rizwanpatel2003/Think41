import React from 'react'
export const ChatContext = React.createContext();

export const ChatProvider = ({ children }) => {
    const [messages, setMessages] = React.useState([]);
    const [loading, setLoading] = React.useState(false);

    const addMessage = (message) => {
        setMessages((prevMessages) => [...prevMessages, message]);
    };

   

    return (
        <ChatContext.Provider value={{ messages, addMessage, clearMessages, loading, setLoading }}>
            {children}
        </ChatContext.Provider>
    );
}