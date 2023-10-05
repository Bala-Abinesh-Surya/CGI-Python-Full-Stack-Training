from flask import Flask, request, jsonify
from pymongo import MongoClient
from bson import ObjectId
from flask_cors import CORS


app = Flask(__name__)
CORS(app)


# Connecting to the mongo db client
client = MongoClient('mongodb://localhost:27017')

# Accessing the db and collection in the client
db = client.amazon
collection = db.books


@app.route('/books', methods=['GET', 'POST'])
def books():
    if request.method == 'POST':
        # user is trying to add a new book
        book = request.get_json()

        # inserting the book in the collection
        insert = collection.insert_one(book)

        return jsonify({"message": "Book added successfully!", "ID": str(insert.inserted_id)}), 201

    else:
        # method is GET
        # user is trying to access all the books in the collection

        # converting to list because it will of cursor type
        books = list(collection.find())

        for book in books:
            # by default, _id will be of type ObjectId
            # ObjectId is not json serializable, so converting it to string
            book['_id'] = str(book['_id'])

        return jsonify(books), 200


@app.route('/books/<book_id>', methods=['GET'])
def get_book(book_id):
    # converting the book)id to ObjectId type
    book = collection.find_one({"_id": ObjectId(book_id)})

    if book:
        # means book with the given id is in the collection

        # converting the book's id to string type
        book['_id'] = str(book['_id'])

        return jsonify(book), 200

    else:
        # book is not found in the collection
        return ({"message": 'Book not found!'}), 404


@app.route('/books/update-book/<book_id>', methods=['PUT'])
def update_book(book_id):
    data = request.get_json()

    # removing the id field from the data
    # because, _id in the book is the primary key. Don't need to update that
    data.pop('_id')

    # converting the book_id to ObjectId type
    update = collection.update_one({"_id": ObjectId(book_id)}, {
                                   "$set": request.get_json()})

    if update.modified_count == 1:
        # book is modified (updated)
        return jsonify({"message": "Book updated successfully!"}), 200

    else:
        # book is not found or not updated
        return jsonify({"message": "Book not found!"}), 404


@app.route('/books/delete-book/<book_id>', methods=['DELETE'])
def delete_book(book_id):
    # converting the book_id to ObjectId type
    delete = collection.delete_one({"_id": ObjectId(str(book_id))})

    if delete.deleted_count == 1:
        return jsonify({"message": "Book deleted successfully!"}), 200

    else:
        return jsonify({"message": "Book not found!"}), 404


if __name__ == "__main__":
    app.run(debug=True)
