# copying contents from one file to another
with open('./first.txt', 'r') as first, open('./second.txt', 'a') as second:
    for line in first:
        second.write(line)
        