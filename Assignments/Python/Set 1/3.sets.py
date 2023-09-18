# set
programming_languages = {'Java', 'Python', 'C'}

# adding a new programmming language
programming_languages.add('C++')

# removing a language from the set
programming_languages.remove('C')

# checking if Python is in the set
print(f'Is python in the set ? : {"Python" in programming_languages}')

# known language set
language = {'Java', 'English'}

# checking for the intersection of two sets
print(f'Intersection : {programming_languages.intersection(language)}')