# open a file and append more contents to the file
path = './hi.txt'

with open(path, 'a') as file:
    file.write('\nMore additional content written to the file')