from dotenv import load_dotenv
from flask import Flask, jsonify
from apscheduler.schedulers.background import BackgroundScheduler
from google_sheets import read_google_sheet
from utils.process_data import process_data
from utils.get_database import get_database


load_dotenv()

app = Flask(__name__)

scheduler = BackgroundScheduler(daemon=True)

def check_google_sheets():
    # Function to fetch and process data from Google Sheets
    data = read_google_sheet()
    print(data)  # Example action: print the data. Replace this with your actual processing logic.

# Schedule the `check_google_sheets` function to run periodically
scheduler.add_job(process_data, 'interval', minutes=1) 

@app.route('/get-calls-summary')
def get_data_from_google_sheets():
    data = read_google_sheet()
    return jsonify(data)

@app.route('/')
def home():
    return "Hello, Flask with MongoDB!"

if __name__ == '__main__':
    dbname = get_database()
    scheduler.start()  # Start the scheduler
    try:
        app.run(use_reloader=False)  # Prevents the scheduler from being started twice in debug mode
    except (KeyboardInterrupt, SystemExit):
        pass
    finally:
        scheduler.shutdown()