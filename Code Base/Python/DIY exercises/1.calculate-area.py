def calculate_area(length, width):
    area = length * width
    return area

# getting the inputs from the user
length_input = float(input('Enter the length of the rectange : '))
width_input = float(input('Enter the width of the rectange : '))

# calculating the area of the rectangle
area = calculate_area(length_input, width_input)

# display the output
print(f'The area of the rectangle is {area} square units')