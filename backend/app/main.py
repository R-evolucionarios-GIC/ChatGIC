from transformers import pipeline
from fastapi import FastAPI,HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

chatbot = pipeline("question-answering", model="deepset/roberta-base-squad2")

class ChatRequest(BaseModel):
    context: str  
    question: str


@app.get("/")
async def root():
    return {"message": "API is running"} 

@app.post("/chat")
async def chat(chat_request: ChatRequest):
    user_context = chat_request.context
    user_question = chat_request.question

    if not user_context or not user_question:
        raise HTTPException(status_code=400, detail="Contexto e pergunta deve ser disponibilizado")


    response = chatbot(question=user_question, context=user_context)
    return {"response": response['answer']}