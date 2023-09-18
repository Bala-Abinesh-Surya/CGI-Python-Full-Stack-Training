import numpy as np

first_array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
second_array = [2, 4, 6, 8, 10]
    
# printing both the array
print(f'First array : {first_array}')
print(f'Second array : {second_array}')

# finding the common elements
print(f'Common elements : {np.intersect1d(first_array, second_array)}')
