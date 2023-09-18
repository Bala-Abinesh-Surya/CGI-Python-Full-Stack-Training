class Person:
    def __init__(self, name, age):
        self.name = name
        self.age = age

    def greet(self):
        print(f'Hi, My name is {self.name} and I am {self.age} years old')

person1 = Person('Bala Abinesh Surya', 22)
person2 = Person('Ajin', 22)

person1.greet()
person2.greet()