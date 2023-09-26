from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)


tasks = [
    {"id": 1, "title": "First task"},
    {"id": 2, "title": "Second task"}
]


@app.route('/tasks', methods=['GET', 'POST'])
def handle_tasks():
    if request.method == 'GET':
        return jsonify(tasks)
    
    else:
        new_task = request.json
        tasks.append(new_task)
        return jsonify({"message": "Task added successfully"}), 201
    
    
    
if __name__ == "__main__":
    app.run(debug=True)