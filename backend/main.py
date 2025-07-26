from fastapi import FastAPI,request
from models import session, messages, products, sessionconv, user,session as DBSession
import uuid ,requests

app = FastAPI()
@app.post("/api/chat")
async def chat(request: request):
    data = await request.json()
    msg=data.get("message")
    user_id = data.get("user_id","guest")
    session_id = data.get("session_id", str(uuid.uuid4()))
    
    # Create a new session if it doesn't exist
    db_session = session()
    db.merge(user(id=user_id))
    db.merge(sessionconv(id=session_id, user_id=user_id))
    db.commit()

    db.add(messages(id=str(uuid.uuid4()), session_id=session_id, sender='user', text=msg))
    db.commit()
    
    res=requests.post("http://api.grok.com/openai/chat/completions",headers={"authorization":f"Bearer {user_id}",contwent_type:"application/json"},
                       json={model:"llama3-8b-8192", "message": [{"role": "user", "content": msg}]})
    
    bot_reply = res.json().get("reply", "No reply from bot")
    db.add(messages(id=str(uuid.uuid4()), session_id=session_id, sender='bot', text=bot_reply))
    db.commit()
    return {"session_id": session_id, "reply": bot_reply}