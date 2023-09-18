# dictionary of books
dict = {
    '400 Days': 'Bhagat',
    'What not to do at IIT?': 'Chetan Bhagat',
    'Ponniyin Selvan': 'Kalki',
    'Pride and Prejudice': 'Jane Austen'
}

# adding a new book
dict['Billion Dreams'] = 'Sachin Tendulkar'

# updating the author of an existing book
dict['400 Days'] = 'Chetan Bhagat'

# looping through the dictionary
for key, value in dict.items():
    print(f'{key} : {value}')