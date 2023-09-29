class ShoppingCart:
    def __init__(self):
        self.items = []
        
        
    # adding items to the cart
    def add_item(self, product, quantity):
        self.items.append({"product": product, "quantity": quantity})
        
    
    # removing an item from the cart
    def remove_item(self, product):
        for item in self.items:
            if item['product'] == product:
                self.items.remove(item)
                break
            
            
    # calculating the total of the cart
    def calculate_total(self):
        total = 0
        for item in self.items:
            total += item['product'].price * item['quantity']
            
        return total