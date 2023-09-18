class Calculator:
    def __init__(self, a, b):
        self.a = a
        self.b = b

        print(f'Two numbers : {self.a} and {self.b}')

        print('Add : ', self.add())
        print('Subtract : ', self.subtract())
        print('Multiply : ', self.multiply())
        print('Divide : ', self.divide())

    def add(self):
        return self.a + self.b
    
    def subtract(self):
        return self.a - self.b
    
    def multiply(self):
        return self.a * self.b
    
    def divide(self):
        return self.a / self.b
    

calci = Calculator(8, 4)