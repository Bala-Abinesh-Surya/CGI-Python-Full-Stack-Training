from pymongo import MongoClient

# Step 1: Establish a connection to mongodb
client = MongoClient('mongodb://localhost:27017')


'''
Prerequisites:
    1. Create a 'company' db and 'employees' collection in the same db
    2. Add some employees in the collection
'''


# Step 2: Accessing the database and collection
db = client.company
collection = db.employees


# Step 3: DELETE a document
delete_filter = {"name": "Asir Paul"}
result = collection.delete_one(delete_filter)

print(f'Deleted {result.deleted_count} documents')


# Step 4: READING all the documents (after deleting)
cursor = collection.find()

for document in cursor:
    name = document['name']
    position = document['position']
    
    print(f'Name: {name} | Position: {position}')