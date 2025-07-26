import React from 'react'

function Message({text, sender}) {
    return (
        <div style={{textAlign: sender === 'user' ? 'right' : 'left', margin: '10px 0',color: sender === 'user' ? 'blue' : 'green'}}>
            <b>{sender==='user'? 'you':'AI'}</b>
        </div>
    )
}

export default Message
