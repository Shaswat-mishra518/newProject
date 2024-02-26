// Sample employee leave details data (replace with your actual data)
var employeeLeaveDetails = [
    { name: "Rahul", totalLeave: 20, leaveTaken: 5 },
    { name: "Rohit", totalLeave: 15, leaveTaken: 10 },
    { name: "Ram", totalLeave: 25, leaveTaken: 15 },
    { name: "Shiva", totalLeave: 20, leaveTaken: 5 },
    { name: "Sumit", totalLeave: 15, leaveTaken: 10 },
    { name: "Shivam", totalLeave: 25, leaveTaken: 15 }



  ];
  
  // Function to calculate remaining leave
  function calculateRemainingLeave(totalLeave, leaveTaken) {
    return totalLeave - leaveTaken;
  }
  
  // Function to display employee leave details
  function displayLeaveDetails() {
    var tableBody = document.getElementById('leaveDetailsBody');
    tableBody.innerHTML = ''; // Clear existing rows
    
    employeeLeaveDetails.forEach(function(employee) {
      var row = tableBody.insertRow();
      row.insertCell().textContent = employee.name;
      row.insertCell().textContent = employee.totalLeave;
      row.insertCell().textContent = employee.leaveTaken;
      row.insertCell().textContent = calculateRemainingLeave(employee.totalLeave, employee.leaveTaken);
    });
  }
  
  // Call the function to display employee leave details when the page loads
  window.onload = function() {
    displayLeaveDetails();
  };
  