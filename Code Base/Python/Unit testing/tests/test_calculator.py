import os
import sys

sys.path.append(os.path.abspath(os.path.join(os.path.dirname(__file__), '..')))

from basics.caclulator import Calculator

# creating an instance for the Calculator class
calculator = Calculator()


# testing the add method
def test_add():
    assert calculator.add(0, 0) == 0
    assert calculator.add(14, 0) == 14
    assert calculator.add(2, 7) == 9
    assert calculator.add(0, 8) == 8
    
    
# testing the subtract method
def test_subtract():
    assert calculator.subtract(0, 0) == 0
    assert calculator.subtract(0, 10) == -10
    assert calculator.subtract(-1, -6) == 5
    assert calculator.subtract(7, 2) == 5
    
    
# testing the multiply method
def test_multiply():
    assert calculator.multiply(2, 3) == 6
    assert calculator.multiply(2, 7) == 14
    assert calculator.multiply(100, -3) == -300
    assert calculator.multiply(10, 0) == 0
    
    
# testing the divide method
def test_divide():
    assert calculator.divide(1, 1) == 1
    assert calculator.divide(10, 5) == 2
    assert calculator.divide(15, 3) == 5
    assert calculator.divide(100, 10) == 10
    

# testing divide by zero error
def test_divide_by_zero():
    try:
        calculator.divide(10, 0)
        
    except ValueError as error:
        assert str(error) == 'Cannot divide by zero!'
    
