# Sentiment-Analyzer-Agent
This agent classifies the text as POSITIVE or NEGATIVE sentiment in real-time!
1. Go to the sentiment-analyser directory and install dependencies using:
```bash
pip install -r requirements.txt
```
2. Install the model with a test.py.
```bash
from transformers import pipeline
pipe = pipeline("text-classification", model="distilbert/distilbert-base-uncased-finetuned-sst-2-english")
```

3. In app.py replace the model_path with your actual path of downloaded model.
```bash
from transformers import pipeline
MODEL_PATH = "C:/Users/{your device name}/.cache/huggingface/hub/models--distilbert--distilbert-base-uncased-finetuned-sst-2-english/snapshots/714eb0fa89d2f80546fda750413ed43d93601a13"
pipe = pipeline("text-classification", model=MODEL_PATH)
```

4. Go to your browser (Chrome is highly recommended)
5. Type chrome://extensions/ in the url bar.
6. Turn ON the "Developer Mode".
7. Click on "Load Unpacked" and extension will be downloaded.
8. Go to the sentiment-analyser directory and open terminal.
9. Start the FastAI app using: 
```bash
uvicorn main:app --reload
```
