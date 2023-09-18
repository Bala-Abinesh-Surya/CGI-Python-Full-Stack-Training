class Shape:
    def __init__(self, color):
        self.color = color
        
    def area(self):
        pass
    
class Circle(Shape):
    def __init__(self, color, radius):
        super().__init__(color)
        self.radius = radius
        
    def area(self):
        return 3.14 * (self.radius ** 2)
    
class Rectangle(Shape):
    def __init__(self, color, length, width):
        super().__init__(color)
        self.length = length 
        self.width = width
        
    def area(self):
        return self.width * self.length


circle = Circle('Red', 4)
rectangle = Rectangle('Blue', 2, 4)
    
print(f'Area of the circle is {circle.area()} square units')
print(f'Area of the rectangle is {rectangle.area()} square units')