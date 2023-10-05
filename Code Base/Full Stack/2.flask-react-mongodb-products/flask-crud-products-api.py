from flask import Flask, request, jsonify
from pymongo import MongoClient
from flask_cors import CORS
from bson import ObjectId

app = Flask(__name__)
CORS(app)

# connecting to the mongodb client
client = MongoClient('mongodb://localhost:27017')

# Accessing the db and collection in the client
db = client.amazon
collection = db.products


@app.route('/products', methods=['GET', 'POST'])
def products():
    if request.method == 'POST':
        # user is adding a product
        data = request.get_json()

        insert_result = collection.insert_one(data)

        return jsonify({"message": "Product created sccesffuly", "id": str(insert_result.inserted_id)}), 201

    else:
        # user is trying to access the products
        products = list(collection.find())

        for product in products:
            # converting all the products _id from ObjectId type tro string
            product['_id'] = str(product['_id'])

        return jsonify(products), 200


@app.route('/product/<productId>', methods=['GET'])
def retrieve_product(productId):
    # retrieving a particular product from the collection
    product = collection.find_one({"_id": ObjectId(productId)})

    if product:
        product["_id"] = str(product["_id"])

        return jsonify(product), 200

    else:
        return jsonify({"message": "Product not found"}), 404


@app.route('/delete-product/<product_id>', methods=['DELETE'])
def delete_product(product_id):
    # deleting the product in the collection
    delete = collection.delete_one({"_id": ObjectId(product_id)})

    if delete.deleted_count == 1:
        return jsonify({"message": "Product deleted successfully!"}), 200

    else:
        return jsonify({"message": "Product not found"}), 404


@app.route('/update-product/<product_id>', methods=['PUT'])
def update_product(product_id):
    # updating a product with the help of id
    update_result = collection.update_one({"_id": ObjectId(product_id)}, {
                                          "$set": request.get_json()})

    if update_result.modified_count == 1:
        return jsonify({"message": "Product updated successfully!"}), 200

    else:
        return jsonify({"message": "Product not found!"}), 404


if __name__ == "__main__":
    app.run(debug=True)
