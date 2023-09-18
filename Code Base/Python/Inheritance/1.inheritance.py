# Parent class (Base class)
class Animal:
    def __init__(self, name):
        self.name = name
        
    def speak(self):
        pass

# Child class of Animal class    
class Dog(Animal):      
    def speak(self):
        return "Poof"
    
# Child class of Animal class
class Cat(Animal):
    def speak(self):
        return 'Meow!'
    
dog = Dog('Ásir')
cat = Cat('Ébinesh')

print(f'{dog.name} says {dog.speak()}')
print(f'{cat.name} says {cat.speak()}')
