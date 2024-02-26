document.getElementById('addEmployeeForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission for this example
  
    // Get form values
    var name = document.getElementById('employeeName').value.trim();
    var email = document.getElementById('employeeEmail').value.trim();
    var department = document.getElementById('employeeDepartment').value.trim();
  
    // Add employee to localStorage (you can replace this with your backend logic)
    var employee = {
      name: name,
      email: email,
      department: department
    };
  
    var employees = JSON.parse(localStorage.getItem('employees')) || [];
    employees.push(employee);
    localStorage.setItem('employees', JSON.stringify(employees));
  
    // Redirect to next page (view employees)
    window.location.href = 'viewEmployees.html';
  });
  