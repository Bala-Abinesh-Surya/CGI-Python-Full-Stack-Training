from flask import Flask, request, jsonify
from pymongo import MongoClient


app = Flask(__name__)

# connecting to the mongog client
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
            product['_id'] = str(product['_id'])

        return jsonify(products), 200


if __name__ == "__main__":
    app.run(debug=True)
