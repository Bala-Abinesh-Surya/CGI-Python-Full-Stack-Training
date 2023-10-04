from pymongo import MongoClient

# Step 1: Establish a connection to mongodb
client = MongoClient('mongodb://localhost:27017')


'''
Prerequisites:
    Create a 'company' db and 'employees' collection in the same db
'''


# Step 2: Access the database and collection
db = client.company
collection = db.employees


# Step 3: CREATE a document
employee = {
    'name': 'Bala Abinesh Surya',
    'age': 22,
    'position': 'Senior Sofware Engineer'
}

# CREATE operation
# Insert the document into the collection
result = collection.insert_one(employee)


# READ operation
# Step 4: Reading all the employees in the collection
cursor = collection.find()

for document in cursor:
    name = document['name']
    print(f'Employee name : {name}')

