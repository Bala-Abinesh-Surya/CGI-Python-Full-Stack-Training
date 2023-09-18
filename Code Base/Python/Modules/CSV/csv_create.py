import csv

#  create a csv file and write to it
path = 'D:/data.csv'

data = [['Name', 'Bala Abinesh Surya'], ['Age', 20], ['Gender', 'Male']]

with open(path, 'w', newline="") as file:
    writer = csv.writer(file)
    writer.writerows(data)
    
# reading from csv files
with open(path, 'r', newline="") as file:
    reader = csv.reader(file)
    
    for row in reader:
        print(row)