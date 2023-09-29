import os
import sys

sys.path.append(os.path.abspath(os.path.join(os.path.dirname(__file__), '..')))

from basics.even_odd import is_even


# testing even number
def test_even_numbers():
    assert is_even(0) == True
    assert is_even(10) == True
    assert is_even(20) == True
    assert is_even(46) == True
    

# testing odd number
def test_odd_numbers():
    assert is_even(3) == False
    assert is_even(11) == False
    assert is_even(27) == False
    assert is_even(55) == False
    
    
# testing negative numbers
def test_negative_numbers():
    assert is_even(-10) == True
    assert is_even(-2) == True
    assert is_even(-93) == False
    assert is_even(-81) == False
    
    
# testing decimal numbers
def test_decimal_numbers():
    assert is_even(2.0) == True
    assert is_even(20.2) == False
    assert is_even(10.5) == False
    assert is_even(20.1) == False
    assert is_even(46.6) == False