# Enter a sentence
sentence = str(input('Enter a sentence : '))

list = sentence.split(' ')
for i in range(len(list)-1, -1, -1):
    print(list[i], end=" ")

