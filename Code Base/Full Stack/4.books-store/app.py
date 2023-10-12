from flask import Flask
from flask_restful import Api, Resource, reqparse
from pymongo import MongoClient
from bson import ObjectId
from flask_cors import CORS

# initialising the Flask app
app = Flask(__name__)
CORS(app)
api = Api(app)
parser = reqparse.RequestParser()

parser.add_argument('name', type=str, required=True,
                    help='Book name cannot be emppty!')
parser.add_argument('author', type=str, required=True,
                    help='Author name cannot be emppty!')
parser.add_argument('description', type=str, required=True,
                    help='Description cannot be empty!')
parser.add_argument('price', type=int, required=True,
                    help='Price name cannot be emppty!')
parser.add_argument('image', type=str, required=True,
                    help='Image URL cannot be emppty!')


# setting up the mongo client
client = MongoClient('mongodb://db:27017/')

# accessing the db and collection from the mongo client
db = client.amazon
collection = db.books


class BooksManagement(Resource):
    # getting all the books or a specific book using book_id
    def get(self, book_id=None):
        if book_id:
            book = collection.find_one({"_id": ObjectId(book_id)})

            if book:
                # converting the ObjectId to str
                book["_id"] = str(book["_id"])

                return book, 200

            else:
                return {"message": "Book not found!"}, 404

        else:
            books = list(collection.find())

            for book in books:
                # converting ObjectId to string
                book["_id"] = str(book["_id"])

            return books, 200

    def post(self):
        # getting the book data from the request body
        args = parser.parse_args()

        book = {
            "name": args["name"],
            "author": args["author"],
            "price": args["price"],
            "description": args["description"],
            "image": args["image"]
        }

        # inserting the book in the collection
        collection.insert_one(book)

        return {"message": "Book inserted successfully"}, 201

    def put(self, book_id):
        # updating the book using book_id and the contents in the request's body
        args = parser.parse_args()

        book = {
            "name": args["name"],
            "author": args["author"],
            "price": args["price"],
            "description": args["description"],
            "image": args["image"]
        }

        # updating the book in the collection
        update = collection.update_one(
            {"_id": ObjectId(book_id)}, {"$set": book})

        if update.matched_count == 1:
            return {"message": "Book updated successfully!"}, 201

        else:
            return {"message": "Book not found!"}, 404

    def delete(self, book_id):
        # deleting the book using the book id
        delete = collection.delete_one({"_id": ObjectId(book_id)})

        if delete.deleted_count == 1:
            return {"message": "Book deleted successfully!"}, 201

        else:
            return {"message": "Book not found!"}, 404


api.add_resource(BooksManagement, '/books',
                 '/books/<string:book_id>')


if __name__ == "__main__":
    app.run(debug=True, host="0.0.0.0", port=5000)
