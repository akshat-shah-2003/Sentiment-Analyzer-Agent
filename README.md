# Sentiment-Analyzer-Agent
This agent classifies the text as POSITIVE or NEGATIVE sentiment in real-time!
1. <pre> ```from transformers import pipeline
pipe = pipeline("text-classification", model="distilbert/distilbert-base-uncased-finetuned-sst-2-english") # Install model using a pipeline as a high-level helper</pre>
2. <pre> ```pip install -r requirements.txt # Install dependencies</pre>
