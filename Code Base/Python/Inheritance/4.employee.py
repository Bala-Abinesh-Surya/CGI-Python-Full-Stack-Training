class Employee:
    def __init__(self, firstName, lastName):
        self.firstName = firstName
        self.lastName = lastName

    def getFirstName(self):
        return self.firstName
    
    def getLastName(self):
        return self.lastName
    
e1 = Employee('Bala', 'Surya')
print(e1.getLastName())
print(e1.getFirstName())