document.getElementById('leaveForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission for this example
    var employeeName = document.getElementById('employeeName').value.trim();
    var leaveStartDate = document.getElementById('leaveStartDate').value.trim();
    var leaveEndDate = document.getElementById('leaveEndDate').value.trim();
    var reason = document.getElementById('reason').value.trim();
    
    // Here you can add logic to handle the leave application submission
    // For this example, let's just log the form values
    console.log('Employee Name:', employeeName);
    console.log('Leave Start Date:', leaveStartDate);
    console.log('Leave End Date:', leaveEndDate);
    console.log('Reason:', reason);
  });
  