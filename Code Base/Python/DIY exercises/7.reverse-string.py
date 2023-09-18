message = str(input('Enter a series of alphabets : '))

array = list(message)

for i in range(len(array)):
    for j in range(i+1, len(array)):
        if array[j] < array[i]:
            array[i], array[j] = array[j], array[i]
            
print(array)