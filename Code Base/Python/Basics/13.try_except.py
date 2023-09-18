try:
    num1 = float(input('Enter the numerator : '))
    num2 = float(input('Énter the denominator : '))
    
    result = num1 / num2
    print(f'{num1} divided by {num2} is {result}')
    
except ZeroDivisionError:
    print('Cannot divide by zero')
    
except ValueError:
    print('Enter the valid numbers')
    
except Exception as e:
    print('An unexcepted error accured, ', e)