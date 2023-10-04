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


# Step 3: UPDATE a document in the collection
update_filter = {"name": "Bala Abinesh Surya"}
update_query = {"$set": {"position": "Sofware Engineer"}}

result = collection.update_one(update_filter, update_query)
print(f'Matched documents : {result.matched_count} and updated documents : {result.modified_count}')


# Step 4: READING the documents (updated)
cursor = collection.find()

for document in cursor:
    name = document['name']
    position = document['position']
    
    print(f'Name: {name} | Position: {position}')