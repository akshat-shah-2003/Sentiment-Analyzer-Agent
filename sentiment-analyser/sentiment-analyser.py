# Use a pipeline as a high-level helper
import torch
import gradio as gr
from transformers import pipeline
pipe = pipeline("text-classification", model="../models/models--distilbert--distilbert-base-uncased-finetuned-sst-2-english/snapshots/714eb0fa89d2f80546fda750413ed43d93601a13")
#print(pipe("This smartphone is damaged."))
def sentiment_analyse(text):
    return pipe(text)[0]['label']

gr.close_all()
demo = gr.Interface(fn=sentiment_analyse,
                    inputs=[gr.Textbox(label = "Enter text to analyse",lines = 10)],
                    outputs=[gr.Textbox(label = "Summary",lines = 1)],
                    title="Sentiment Analysis \U0001F60A",
                    description="THIS APPLICATION CLASSIFIES THE TEXT SENTIMENT AS POSITIVE OR NEGATIVE.")
demo.launch()