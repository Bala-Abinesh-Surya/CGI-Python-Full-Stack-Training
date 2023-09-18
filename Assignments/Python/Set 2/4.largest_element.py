numbers = [1, 200, 3, 4, 5, 6, 7, 8, 9, 10]

largest = 0

for num in numbers:
    if num > largest:
        largest = num
        
print(f'The largest element in the array : {largest}')