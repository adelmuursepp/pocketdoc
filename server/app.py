from dotenv import load_dotenv
import os
from flask import Flask, jsonify, request
from apscheduler.schedulers.background import BackgroundScheduler
from pymongo import MongoClient
from google_sheets import read_google_sheet
from openai import OpenAI
from mistralai.client import MistralClient
from mistralai.models.chat_completion import ChatMessage



load_dotenv()

app = Flask(__name__)
scheduler = BackgroundScheduler(daemon=True)

# MongoDB connection setup
CONNECTION_STRING = f"mongodb+srv://{os.environ['USERNAME']}:{os.environ['PASSWORD']}@pocketdoccluster.dygbqiw.mongodb.net/pocketdocdb?retryWrites=true&w=majority&appName=pocketdoccluster"
client = MongoClient(CONNECTION_STRING)
db = client.your_database_name

# OpenAI API call setup
# openai.api_key = os.getenv('OPENAI_API_KEY')
client = OpenAI()

# Mistral API call setup

mistral_api_key = os.environ["MISTRAL_API_KEY"]
model = "mistral-tiny"
client = MistralClient(api_key=mistral_api_key)

def check_google_sheets():
    # Function to fetch and process data from Google Sheets
    data = read_google_sheet()
    print(data)  # Example action: print the data. Replace this with your actual processing logic.

# Schedule the `check_google_sheets` function to run periodically
scheduler.add_job(check_google_sheets, 'interval', minutes=1) 

@app.route('/get-calls-summary')
def get_data_from_google_sheets():
    data = read_google_sheet()
    return jsonify(data)

@app.route('/')
def home():
    return "Hello, Flask with MongoDB!"

@app.route('/recommendations', methods=['GET'])
def get_cough_recommendations():
    response = client.chat.completions.create(
    model="gpt-3.5-turbo",
    messages=[
        {"role": "system", "content": "You are a helpful assistant."},
        {"role": "user", "content": "Who won the world series in 2020?"},
        {"role": "assistant", "content": "The Los Angeles Dodgers won the World Series in 2020."},
        {"role": "user", "content": "Where was it played?"}
    ]
    )
    return response

    # prompt = "Give me recommendations for getting better when I have a cough."
    
    # try:
    #     response = openai.Completion.create(
    #         engine="gpt-4",  
    #         prompt=prompt,
    #         temperature=0.1,  # Adjust for creativity. Lower is more deterministic.
    #         max_tokens=100,  # Adjust based on how detailed you want the response to be
    #         top_p=1.0,
    #         frequency_penalty=0.0,
    #         presence_penalty=0.0
    #     )
    #     recommendations = response.choices[0].text.strip()
    #     return jsonify({"recommendations": recommendations})
    # except Exception as e:
    #     return jsonify({"error": str(e)}), 500

@app.route('/fetch-data')
def fetch_data():
    messages = [
        ChatMessage(role="user", content="I have cough, what should I do?")
    ]

    chat_response = client.chat(
        model=model,
        messages=messages,
    )
    message = chat_response.choices[0].message.content
    return(jsonify(message))


if __name__ == '__main__':
    scheduler.start()  # Start the scheduler
    try:
        app.run(use_reloader=False)  # Prevents the scheduler from being started twice in debug mode
    except (KeyboardInterrupt, SystemExit):
        pass
    finally:
        scheduler.shutdown()