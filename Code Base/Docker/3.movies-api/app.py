from flask import Flask
from flask_restful import Api, Resource, reqparse
from pymongo import MongoClient
from bson import ObjectId

app = Flask(__name__)
api = Api(app)

# connecting to the mongo client
client = MongoClient('mongodb://localhost:27017')

# accessing the db and collection
db = client.imdb
movies = db.movies

# parser for parsing the arguments in the request
parser = reqparse.RequestParser()

# movie name
parser.add_argument(
    'name', type=str, required=True, help="Name of the movie canot be empty!")

# genre of the movie
parser.add_argument(
    'genre', type=str, required=True, help="Genre of the movie canot be empty!")

# lead of the movie
parser.add_argument(
    'lead', type=str, required=True, help="Lead of the movie canot be empty!")

# Music director
parser.add_argument(
    'music', type=str, required=True, help="Music director of the movie canot be empty!")


class MoviesManagement(Resource):
    def get(self, movie_id=None):
        if movie_id:
            # user is asking for a specific movie
            movie = movies.find_one({"_id": ObjectId(movie_id)})

            if movie:
                # converting the ObjectId of the movie to string
                movie["_id"] = str(movie["_id"])

                return movie, 200

            else:
                # movie with the specified id is not found
                return {"error": "Movie not found!"}, 404

        else:
            # retrieving all the movies in the collection
            all_movies = list(movies.find())

            for movie in all_movies:
                # converting the ObjectId of all movies to string
                movie["_id"] = str(movie["_id"])

            return all_movies, 200

    def post(self):
        # parsing the arguments in the request
        args = parser.parse_args()

        movie = {
            "name": args["name"],
            "genre": args["genre"],
            "lead": args["lead"],
            "music": args["music"]
        }

        # adding the movie in the collection
        insert = movies.insert_one(movie)

        return {"message": "Movie added successfully!", "id": str(insert.inserted_id)}, 201

    def put(self, movie_id):
        args = parser.parse_args()

        movie = {
            "name": args["name"],
            "genre": args["genre"],
            "lead": args["lead"],
            "music": args["music"]
        }

        # updating the movie in the collection
        update = movies.update_one(
            {"_id": ObjectId(movie_id)}, {"$set": movie})

        if update.matched_count == 1 or update.modified_count == 1:
            return {"message": "Movie updated successfully", "movie": movie}, 200

        else:
            # movie is not found
            return {"error": "Movie is not found"}, 404
        
    def delete(self, movie_id):
        # deleting the movie from the collection
        delete = movies.delete_one({"_id": ObjectId(movie_id)})

        if delete.deleted_count == 1:
            return {"message": "Movie deleted successfully!"}, 200
        
        else:
            return {"error": "Movie not found!"}, 404


api.add_resource(MoviesManagement, '/', '/<string:movie_id>')

if __name__ == "__main__":
    app.run(debug=True)
