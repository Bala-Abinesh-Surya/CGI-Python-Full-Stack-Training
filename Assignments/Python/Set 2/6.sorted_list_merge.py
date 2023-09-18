import numpy as np

list1 = [1, 2, 3, 4, 5, 6, 7, 9, 10]
list2 = [8, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]

print(f'\nFirst list : {list1}')
print(f'Second list : {list2}')

# concatenating two lists and then sorting them
print(f'Sorted merged list : {np.sort(np.concatenate([list1, list2]))}')