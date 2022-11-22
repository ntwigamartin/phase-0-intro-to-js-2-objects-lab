// Write your solution in this file!
const employee = {
    name: "John",
    streetAddress: "westlands",
}

function updateEmployeeWithKeyAndValue(employee, key, value) {
    const employeeUpdated = {...employee}
    employeeUpdated[key] = value;
    return employeeUpdated
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee
}

function deleteFromEmployeeByKey(employee, key) {
    const reducedEmployee = {...employee}
    delete reducedEmployee.name;
    return reducedEmployee
}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee.name;
    return employee
}