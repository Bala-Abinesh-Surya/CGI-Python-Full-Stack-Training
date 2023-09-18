import json

path = 'D:/data.json'

data = {'Name': 'Bala Abinesh Surya', 'Age': 20}

with open(path, 'w') as file:
    json.dump(data, file)
    
# reading from json file
with open(path, 'r') as file:
    print(json.load(file))