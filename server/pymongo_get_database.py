from dotenv import load_dotenv
import os
from pymongo import MongoClient

load_dotenv()

def get_database(): 
   CONNECTION_STRING = f"mongodb+srv://{os.environ['USERNAME']}:{os.environ['PASSWORD']}@pocketdoccluster.dygbqiw.mongodb.net/pocketdocdb?retryWrites=true&w=majority&appName=pocketdoccluster"

   client = MongoClient(CONNECTION_STRING)
   
   # Create the database for our example (we will use the same database throughout the tutorial
   return client['pocketdocdb']
  
# This is added so that many files can reuse the function get_database()
if __name__ == "__main__":   
   dbname = get_database()
