import react from "react";
import axios from "axios";
function App() {
  const [msg, setmsg] = react.useState('');
    const [chat, setchata] = react.useState([]);

const handleSend = async () => {
    const response = await axios.post('http://localhost:8000/api/chat', { message: msg },user_id='guest');
    setchata([...chat,{q:msg, a:response.data.reply}]);
    setmsg('');
}

  return (
    <div style={{ padding: '20px' }}>
      <h3>Ecommerce chatbot</h3>
      {
        chat.map((item, index) => (
          <div key={index}>
            <p><strong>You:</strong> {item.q}</p>
            <p><strong>Bot:</strong> {item.a}</p>
          </div>
        ))
      }
        <input 
            type="text" 
            value={msg} 
            onChange={(e) => setmsg(e.target.value)} 
            placeholder="Type your message here..."/>
        <button onClick={handleSend}>Send</button>
    </div>
  );
}