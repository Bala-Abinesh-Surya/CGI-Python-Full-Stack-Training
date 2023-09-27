from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

products = [
    {"id": 1, "name": "Laptop", "brand": "DELL", "price": 50000},
    {"id": 2, "name": "Power bank", "brand": "Xiaomi", "price": 5000},
    {"id": 3, "name": "Charger", "brand": "Samsung", "price": 50},
    {"id": 4, "name": "Mouse", "brand": "DELL", "price": 500},
    {"id": 5, "name": "Wifi Adapter", "brand": "Intel", "price": 3000},
    {"id": 6, "name": "Chair", "brand": "Secret Labs", "price": 5000}
]


@app.route('/', methods=['GET'])
def home():
    return jsonify(products)


if __name__ == "__main__":
    app.run(debug=True)