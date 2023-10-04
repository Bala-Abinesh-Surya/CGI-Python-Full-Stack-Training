from pymongo import MongoClient


# Step 1: Connect to the mongoDB
client = MongoClient('mongodb://localhost:27017')


'''
Prerequisites:
    Create a 'vehicles' db and 'cars' collection in the same db
'''


# Step 2: Accessing the database and collection in the client
db = client.vehicles
collection = db.cars


# CREATE OPERATION
# Step 3: Creating a new document and inserting it
car = {
    "name": "Maruti Swift",
    "regNo": "TN72AW2040",
    "category": "4 Seater",
    "brand": "Maruti"
}

inserted_document = collection.insert_one(car)
print(f'Inserted document : {inserted_document.inserted_id}')


# READ OPERATION
# Step 4: Reading all the documents in the collection
cursor = collection.find()

for document in cursor:
    name = document['name']
    regNo = document['regNo']
    
    print(f'Car Name: {name} | Reg.No: {regNo}')
    
    

# UPDATE OPERATION
# Step 5: Update a document in the collection
update_filter = {"category": "4 Seater"}
update_query = {"$set": {"category": "Four Seater"}}

#updated_result = collection.update_one(update_filter, update_query)
#print(f'Matched {updated_result.matched_count} documents. Modified {updated_result.modified_count} documents')



# DELETE OPERATION
# Step 6: Delete a document from the collection
delete_filter = {"name": "Maruti Swift"}

#deleted_result = collection.delete_one(delete_filter)
#print(f'Deleted {deleted_result.deleted_count} documents')