// Create an employee object with name and streetAddress keys
const employee = {
    name: "John Doe",
    streetAddress: "123 Main St",
  };
  
  // Update employee with a new key-value pair without mutating the original object
  function updateEmployeeWithKeyAndValue(employee, key, value) {
    return {
      ...employee,
      [key]: value,
    };
  }
  
  // Update employee destructively with a new key-value pair by mutating the original object
  function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
  }
  
  // Delete a key-value pair from employee without mutating the original object
  function deleteFromEmployeeByKey(employee, key) {
    const newEmployee = { ...employee };
    delete newEmployee[key];
    return newEmployee;
  }
  
  // Delete a key-value pair from employee destructively by mutating the original object
  function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
  }
  
  
  
  
  
  
  
  
