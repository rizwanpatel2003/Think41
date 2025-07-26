import react from "react";
import axios from "axios";
import { ChatProvider } from './Context/ChatContext';
import Chatwindow from './Components/chatwindow';
function App() {
  

  return (
    
    <ChatProvider>
        <Chatwindow/>
        </ChatProvider>
    
  );
}