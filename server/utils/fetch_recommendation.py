from mistralai.client import MistralClient
from mistralai.models.chat_completion import ChatMessage
from dotenv import load_dotenv
import os
from flask import jsonify

load_dotenv()

# Mistral API call setup
mistral_api_key = os.environ["MISTRAL_API_KEY"]
model = "mistral-tiny"
client = MistralClient(api_key=mistral_api_key)

def fetch_recommendation(summary):
    messages = [
        ChatMessage(role="user", content="I have cough, what should I do? {summary}")
    ]

    chat_response = client.chat(
        model=model,
        messages=messages,
        safe_mode=True
    )
    message = chat_response.choices[0].message.content
    return message