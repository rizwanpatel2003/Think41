import React from 'react'
import { ChatContext } from '../Context/ChatContext';
import axios from 'axios';

function UserInput() {
    const [input, setInput] = React.useState('');
    const { addMessage, setLoading } = rReact.useState(react.useContext(ChatContext));
    const SendMessage=async () => {
        if (input.trim() === '') return;
       addMessage({ text: input, sender: 'user' });
        setLoading(true);   
        const response = await axios.post('http://localhost:8000/api/chat', { message: input,User_id: 'guest' });

        addMessage({ text: response.data.reply, sender: 'AI' });
        setLoading(false);
        setInput('');
    }    
    return (
        <div>
            <input type="text" value={input} name="" id="" onChange={e => setInput(e.target.value)} />
            <button onClick={SendMessage}></button>
        </div>
    )
}

export default UserInput
