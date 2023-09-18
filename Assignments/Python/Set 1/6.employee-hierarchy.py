managers = []
employees = []

class Employee:
    def __init__(self, name, id):
        self.name = name
        self.id = id

    
class Manager():     
    def __init__(self, name):
        self.name = name
        
    def work(self):
        print('I am a manager and I can add a new employee, remove an employee and manage my resouces')
        
    def addEmployee(self):
        name = str(input('Enter the name of the employee : '))
        id = len(employees) + 1
        
        employees.append(Employee(name, id))
        print(f'Employee {name} added')
        
    def removeEmployee(self):
        id = int(input('Enter the id of the employee to remove : '))
        
        if(id > len(employees)):
            print('Invalid employee ID')
            
        else:
            x = employees.pop(id-1)
            print(f'Employee {x.name} removed')
        
manager = Manager('Bala Abinesh Surya')
manager.addEmployee()
manager.addEmployee()
manager.removeEmployee()