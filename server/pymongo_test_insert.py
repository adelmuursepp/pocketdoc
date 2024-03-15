from pymongo_get_database import get_database
dbname = get_database()
collection_name = dbname["pocketdoccollection"]

sample_data = [
    {"name": "Product 1", "price": 10.99},
    {"name": "Product 2", "price": 19.99},
    {"name": "Product 3", "price": 14.99}
]
collection_name.insert_many(sample_data)
