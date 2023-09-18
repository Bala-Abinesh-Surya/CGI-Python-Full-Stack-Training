# reading the file
path = './hi.txt'

with open(path, 'r') as file:
    for line in file:
        print(line.strip())