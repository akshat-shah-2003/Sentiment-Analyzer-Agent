from fastapi import FastAPI, HTTPException
from fastapi.responses import FileResponse
from fastapi.middleware.cors import CORSMiddleware 
from transformers import pipeline
import os

# Initialize FastAPI app
app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Can specify a list of origins
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Initialize the sentiment analysis model
pipe = pipeline("text-classification", model="../models/models--distilbert--distilbert-base-uncased-finetuned-sst-2-english/snapshots/714eb0fa89d2f80546fda750413ed43d93601a13")

# Root route (for testing, can be ignored if not needed)
@app.get("/")
def read_root():
    return {"message": "Welcome to the sentiment analysis API!"}

# Sentiment analysis endpoint
@app.get("/sentiment/")
def sentiment_analyse(text: str = None):
    if not text:
        raise HTTPException(status_code=400, detail="Text parameter is required")
    sentiment = pipe(text)[0]['label']
    return {"sentiment": sentiment}


# Favicon route (optional)
@app.get("/favicon.ico")
def favicon():
    return FileResponse(os.path.join("static", "favicon.ico"))
