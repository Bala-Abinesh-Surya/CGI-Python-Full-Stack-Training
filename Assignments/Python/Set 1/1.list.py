# list of favourite movies
movies = [
    'Vikram',
    'Papanasam',
    'Virumandi',
    'Vasool Raja MBBS',
    'Parasite',
    'Hey Ram'
    'Avengers',
    'Thoza',
    'Iyyapanum Koshiyum',
    'Bro Daddy',
    'Mozhi',
    'Kaithi',
    'Viraluketha veekkam'
]

# printing 3rd movie in the list
print(f'3rd movie : {movies[2]}')

# adding a movie to the end of the list
movies.append('Terminator')

# removing the 2nd movie from the list
removed_movie = movies.pop(1)

# slicing the list 
new_list = movies[:3]
print(f'Sliced movie list : {new_list}')
