from flask import Flask
from flask_restful import Api, Resource, reqparse

app = Flask(__name__)
api = Api(app)
parser = reqparse.RequestParser()

parser.add_argument('username', type=str, required=True,
                    help='Username cannot be empty!')
parser.add_argument('password', type=str, required=True,
                    help='Password cannot be empty!')

# saving the accounts locally in an array
accounts = []


class AccountManagement(Resource):
    # getting all account details or a specific account using account_id
    def get(self, account_id=None):
        if account_id:
            for account in accounts:
                if account["id"] == account_id:
                    return account, 200

            return {"message": "Account not found!"}, 404

        return accounts, 200

    # adding an account using POST
    def post(self):
        # getting the data from the request's body
        args = parser.parse_args()

        account = {
            "id": len(accounts)+1,
            "username": args["username"],
            "password": args.password
        }

        # adding this account to the local accounts array
        accounts.append(account)

        return {"message": "Account created successfully!", "account": account}, 201

    # update an account using account_id (PUT)
    def put(self, account_id):
        # getting the data from the request's body
        args = parser.parse_args()

        for account in accounts:
            if account["id"] == account_id:
                account["username"] = args["username"]
                account["password"] = args["password"]

                return {"message": "Account updated successfully!", "account": account}, 201

        return {"message": "Account not found!"}, 404

    # deleting an account using account_id (DELETE)
    def delete(self, account_id):
        index = 0
        for account in accounts:
            if account["id"] == account_id:
                accounts.pop(index)

                return {"message": "Account deleted successfully!", "account": account}, 201

            index += 1

        return {"message": "Account not found!"}, 404


api.add_resource(AccountManagement, '/accounts', '/accounts/<int:account_id>')


if __name__ == "__main__":
    app.run(debug=True, host="0.0.0.0", port=5000)
