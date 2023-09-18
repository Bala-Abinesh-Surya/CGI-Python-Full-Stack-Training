# parent class (base class)
class Vehicle:
    def __init__(self, make, model):
        self.make = make
        self.model = model
        

# child class  -- inherits the Vehicle class
class Car(Vehicle):
    def __init__(self, make, model, color):
        super().__init__(make, model)
        self.color = color
        
    def getColor(self):
        print(f'Color of the car is {self.color}')
        
        
# child class    -- inherits the Vehicle class
class MotorCycle(Vehicle):
    def __init__(self, make, model, wheel):
        super().__init__(make, model)
        self.wheel = wheel
        
    def info(self):
        print(f'{self.make} is the Make and {self.model} is the model of the bike')
        print(f'Number of wheels : {self.wheel}')
        


# creating child objects
car = Car('Nissan', 'Altima', 'Red')
bike = MotorCycle('Hero Honda', 'Splendor', 2)

# implementing methods
car.getColor()
bike.info()