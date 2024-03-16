from dotenv import load_dotenv
import os
from flask import Flask, jsonify, request
from pymongo import MongoClient
from google_sheets import read_google_sheet

load_dotenv()

app = Flask(__name__)

# MongoDB connection setup
CONNECTION_STRING = f"mongodb+srv://{os.environ['USERNAME']}:{os.environ['PASSWORD']}@pocketdoccluster.dygbqiw.mongodb.net/pocketdocdb?retryWrites=true&w=majority&appName=pocketdoccluster"
client = MongoClient(CONNECTION_STRING)
db = client.your_database_name

@app.route('/get-calls-summary')
def get_data_from_google_sheets():
    data = read_google_sheet()
    return jsonify(data)

@app.route('/')
def home():
    return "Hello, Flask with MongoDB!"

if __name__ == '__main__':
    read_google_sheet()
    app.run(debug=True)