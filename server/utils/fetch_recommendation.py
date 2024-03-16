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
        ChatMessage(role="user", content="Your task is to provide specific suggestions to heal and improve the health of the user with home remedies and potential adjustments in lifestyle, do NOT be generic. Use this information how user feels: {summary}. When presented with the text, come up with a numbered list of 4 solutions, each solution being less than 20 words.")
    ]

    chat_response = client.chat(
        model=model,
        messages=messages,
        safe_mode=True
    )
    message = chat_response.choices[0].message.content
    return message
