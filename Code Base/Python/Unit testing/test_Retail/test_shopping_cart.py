import os
import sys

sys.path.append(os.path.abspath(os.path.join(os.path.dirname(__file__), '..')))

# importing Product and ShoppingCart
from Retail.product import Product
from Retail.shopping_cart import ShoppingCart


# testing add item to the cart
def test_add_item():
    cart = ShoppingCart()
    product = Product('Laptop', 10000)
    
    # adding the product
    cart.add_item(product, 2)
    
    assert len(cart.items) == 1
    assert cart.items[0]['product'] == product
    assert cart.items[0]['product'].name == product.name
    

# testing remove item from the cart    
def test_remove_item():
    cart = ShoppingCart()
    product = Product('Laptop', 10000)
    product1 = Product('Mouse', 200)
    
    cart.add_item(product, 2)
    cart.add_item(product1, 3)
    
    # removing the laptop
    cart.remove_item(product)
    
    assert cart.items[0]['product'] == product1
    

# testing calculate total of the cart  
def test_calculate_total():
    cart = ShoppingCart()
    product = Product('Laptop', 10000)
    product1 = Product('Mouse', 200)
    
    cart.add_item(product, 2)
    cart.add_item(product1, 5)
        
    assert cart.calculate_total() == ((product.price * 2) + (product1.price * 5))
    
    