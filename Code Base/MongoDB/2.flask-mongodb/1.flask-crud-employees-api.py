from flask import Flask, request, jsonify
from pymongo import MongoClient
from bson import ObjectId
from flask_cors import CORS


app = Flask(__name__)
CORS(app)


# Step 1: Connect to the mongodb client
client = MongoClient('mongodb://localhost:27017')


# Step 2: Accessing the database and collection from the client
db = client.company
collection = db.employees


@app.route('/employees', methods=['GET', 'POST'])
def get_employees():
    if request.method == 'GET':
        # READ OPERATION
        employees = list(collection.find())

        for employee in employees:
            # converting all the id field type to string
            # by default, it will be ObjectID type
            employee['_id'] = str(employee['_id'])

        return jsonify(employees), 200

    else:
        # method is POST
        # CREATE OPERATION
        data = request.get_json()

        # inserting the data into the collection
        insert_result = collection.insert_one(data)

        return jsonify({"message": "Ëmployee created successfully!", "id": str(insert_result.inserted_id)}), 201


# READ OPERATION (retrieve a specific employee)
@app.route('/employees/<employee_id>', methods=['GET'])
def get_specific_employee(employee_id):
    employee = collection.find_one({"_id": ObjectId(employee_id)})

    if employee:
        # converting the id of the employee to string
        employee['_id'] = str(employee['_id'])

        return jsonify(employee), 200

    else:
        return jsonify({"message": 'Employee not found!'}), 404


# UPDATE OPERATION (updating data of a specific employee)
@app.route('/employees/update/<employee_id>', methods=['PUT'])
def update_specifi_employee(employee_id):
    data = request.get_json()

    update_result = collection.update_one(
        {"_id": ObjectId(employee_id)}, {"$set": data})

    if update_result.modified_count == 1:
        return jsonify({"message": "Employee updated successfully!"}), 200

    else:
        return jsonify({"message": "Employee not found!"}), 404


# DELETE OPERATION (delete a specific employee)
@app.route('/employees/delete/<employee_id>', methods=['DELETE'])
def delete_specific_employee(employee_id):
    delete = collection.delete_one({"_id": ObjectId(employee_id)})

    if delete.deleted_count == 1:
        return jsonify({'message': 'Employee deleted successfully!'}), 200

    else:
        return jsonify({'message': 'Employee not found!'}), 404


if __name__ == "__main__":
    app.run(debug=True)
