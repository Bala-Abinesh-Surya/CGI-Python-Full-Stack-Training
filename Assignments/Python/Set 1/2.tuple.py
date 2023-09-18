# tuple
fav_colors = ('Red', 'Blue', 'Violet', 'Brown', 'Green', 'Yellow')

# printing the 2nd color
print(f'2nd color : {fav_colors[1]}')

# trying to change some color
try:
    fav_colors[1] = 'Gold'
    
except TypeError as msg:
    # TypeError: 'tuple' object does not support item assignment
    print(f'TypeError: {msg}')

# lopping through the tuple
for color in fav_colors:
    print(color)