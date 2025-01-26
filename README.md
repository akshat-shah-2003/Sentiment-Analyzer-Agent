# Sentiment-Analyzer-Agent
This agent classifies the text as POSITIVE or NEGATIVE sentiment in real-time!
1. <pre> ```bash # Install model using a pipeline as a high-level helper
from transformers import pipeline
pipe = pipeline("text-classification", model="distilbert/distilbert-base-uncased-finetuned-sst-2-english")
</pre>
2. <pre> ```bash # Install dependencies pip install -r requirements.txt</pre>
