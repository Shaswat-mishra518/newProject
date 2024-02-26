document.getElementById('leaveForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const employeeName = document.getElementById('employeeName').value;
    const leaveStartDate = document.getElementById('leaveStartDate').value;
    const leaveEndDate = document.getElementById('leaveEndDate').value;
    const reason = document.getElementById('reason').value;

    // You can perform further validation here if needed

    // Displaying the submitted information (for demonstration purposes)
    console.log("Employee Name:", employeeName);
    console.log("Leave Start Date:", leaveStartDate);
    console.log("Leave End Date:", leaveEndDate);
    console.log("Reason for Leave:", reason);

    // Reset the form after submission
    this.reset();
});
