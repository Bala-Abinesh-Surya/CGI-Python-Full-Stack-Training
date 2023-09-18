# counts the occurence of each words in the sentence
occurences = {}

sentence = str(input('Enter a sentence : '))

if len(sentence) == 0:
    print('Enter a valid sentence')

else:
    # splitting the sentence into words array
    words = sentence.split()

    for word in words:
        if word in occurences:
            occurences[word] = occurences[word] + 1
            
        else:
            # adding the word to the occurences dictionary
            # setting the initial count as 1
            occurences[word] = 1
            
    print('\nWords and their counts...')
    for key, value in occurences.items():
        print(f'{key} : {value}')