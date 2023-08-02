import pickle
from fastapi import FastAPI
from pydantic import BaseModel
from preprocessing_text import preprocess
from fastapi.middleware.cors import CORSMiddleware

class TextData(BaseModel):
    text: str

# Initialize the app
app = FastAPI(title='[CeRDaS Application] Sentiment Analysis Model using FastAPI and Docker', description='This is a task assignment for Full Stack Developer at CeRDaS. The purpose of this task is to deploy Machine Learning (ML) model with FastAPI and Docker. For this task, sentiment analysis has been selected as the main use case.', version='1.0')

# CORS configuration to allow the browser running the front-end React.js application to make requests to the FastAPI back-end.
"""
In the context of a Full Stack Web App:
- Front-end (Next.js [React framework])
- Back-end (FastAPI [Python framework])
These two parts of your application might not be served from the same domain or port.
"""
origins = [
    "http://localhost:3000", 
    "http://localhost:8080", 
    "http://localhost",
    "http://localhost:8000",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Initialize loaded ML models
vectorizer = None
sentiment_model = None

# Load model on startup
@app.on_event('startup')
def load_model():
    global vectorizer, sentiment_model
    with open('./models/vectorizer-ngram-(1,2).pickle', 'rb') as file:
        vectorizer = pickle.load(file)
    with open('./models/sentiment-logisticreg.pickle', 'rb') as file:
        sentiment_model = pickle.load(file)
    
@app.post('/predict', tags=['predictions'])
async def get_prediction(data: TextData):
    # Preprocess the text
    text_data = vectorizer.transform(preprocess([data.text]))
    # Make the prediction
    sentiment = sentiment_model.predict(text_data)
    # Calculate probabilities
    probabilities = sentiment_model.predict_proba(text_data)[0].tolist()
    # Prepare the response
    response = {
        'prediction': 'Positive' if sentiment[0] == 1 else 'Negative',
        'probabilities': {
            'negative': probabilities[0],
            'positive': probabilities[1]
        }
    }
    return response