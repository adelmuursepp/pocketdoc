from dotenv import load_dotenv
import os
from flask import Flask, jsonify, request
from apscheduler.schedulers.background import BackgroundScheduler
from pymongo import MongoClient
from google_sheets import read_google_sheet

load_dotenv()

app = Flask(__name__)
scheduler = BackgroundScheduler(daemon=True)

# MongoDB connection setup
CONNECTION_STRING = f"mongodb+srv://{os.environ['USERNAME']}:{os.environ['PASSWORD']}@pocketdoccluster.dygbqiw.mongodb.net/pocketdocdb?retryWrites=true&w=majority&appName=pocketdoccluster"
client = MongoClient(CONNECTION_STRING)
db = client.your_database_name

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

if __name__ == '__main__':
    scheduler.start()  # Start the scheduler
    try:
        app.run(use_reloader=False)  # Prevents the scheduler from being started twice in debug mode
    except (KeyboardInterrupt, SystemExit):
        pass
    finally:
        scheduler.shutdown()