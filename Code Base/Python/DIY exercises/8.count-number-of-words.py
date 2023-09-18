sentence = str(input('Enter a sentence : '))

# number of words
print(f'There are {len(sentence.split())} words in the sentence')

# number of letters
num = 0

for i in range(len(sentence)):
    if sentence[i] != " ":
        num += 1
        
print(f'There are {num} letters in the sentence')