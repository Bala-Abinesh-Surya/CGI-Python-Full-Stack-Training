from flask import Flask
from flask_restful import Api, Resource, reqparse

app = Flask(__name__)
api = Api(app)

products = []

parser = reqparse.RequestParser()
parser.add_argument('name', type=str, required=True,
                    help='Name cannot be blank!')
parser.add_argument('price', type=float, required=True,
                    help='Price cannot be blank!')


class Products(Resource):
    def get(self, product_id=None):
        if product_id:
            product = next(
                (prod for prod in products if prod['name'] == product_id), None)

            if product:
                return product, 200

            else:
                return {"message": "Product not found!"}, 404

        else:
            return products, 200

    def post(self):
        args = parser.parse_args()

        product = {
            "id": len(products) + 1,
            "name": args['name'],
            "price": args['price']
        }

        products.append(product)

        return {"product": product, "message": "Product added successfully!"}, 201

    def put(self, product_id):
        args = parser.parse_args()

        for product in products:
            if product['id'] == product_id:
                product['name'] = args['name']
                product['price'] = args['price']

                return {"message": "Product got updated!"}, 201

        return {"message": "Product not found!"}, 404

    def delete(self, product_id):
        for product in products:
            if product['id'] == product_id:
                products.pop(product)

                return {"message": "Product deleted successfully!"}, 201

        return {"message": "Product not found!"}, 404


api.add_resource(Products, '/products', '/products/<string:product_id>')

if __name__ == "__main__":
    app.run(debug=True, host="0.0.0.0", port=5000)
