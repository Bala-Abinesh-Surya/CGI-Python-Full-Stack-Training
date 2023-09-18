class Department{
    constructor(name){
        this.name = name;
        this.employees = []
    }

    addEmployee(employee){
        this.employees.push(employee)
    }

    removeEmployee(employeeX){
        this.employees.filter((employee) => employee.id != employeeX.id)
    }
}

class Employee extends Department{
    
}