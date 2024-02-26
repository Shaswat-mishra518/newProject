// Retrieve employees from localStorage
var employees = JSON.parse(localStorage.getItem('employees')) || [];

// Function to display employees
function displayEmployees() {
  var employeeList = document.getElementById('employeeList');
  employeeList.innerHTML = ''; // Clear existing list
  
  employees.forEach(function(employee) {
    var listItem = document.createElement('li');
    listItem.textContent = `Name: ${employee.name}, Email: ${employee.email}, Department: ${employee.department}`;
    employeeList.appendChild(listItem);
  });
}

// Call the function to display employees when the page loads
window.onload = function() {
  displayEmployees();
};
