// script.js
// Sample data (can be fetched from the server)
const approvals = [
    { name: 'John Doe', department: 'IT', data: '2024-02-18', reason: 'Vacation', status: 'Pending' },
    { name: 'Jane Smith', department: 'HR', data: '2024-02-19', reason: 'Sick Leave', status: 'Approvel' },
    { name: 'Amit', department: 'IT', data: '2024-02-18', reason: 'Vacation', status: 'Pending' },
    { name: 'Ankit', department: 'HR', data: '2024-02-19', reason: 'Sick Leave', status: 'Approvel' },
    { name: 'Rahul', department: 'CS', data: '2024-02-18', reason: 'Vacation', status: 'Reject' },
    { name: 'Rohit', department: 'HR', data: '2024-02-19', reason: 'Sick Leave', status: 'Pending' },
    { name: 'Rohan', department: 'CS', data: '2024-02-18', reason: 'Vacation', status: 'Reject' },
    { name: 'Shiva', department: 'HR', data: '2024-02-19', reason: 'Sick Leave', status: 'Pending' },
    
];

const approvalsTable = document.getElementById('approvalsTable');

approvals.forEach(approval => {
    const row = document.createElement('tr');
    row.innerHTML = `
        <td>${approval.name}</td>
        <td>${approval.department}</td>
        <td>${approval.data}</td>
        <td>${approval.reason}</td>
        <td>${approval.status}</td>
        <td><button onclick="approve('${approval.name}', '${approval.data}')">Approve</button> / <button onclick="reject('${approval.name}', '${approval.data}')">Reject</button></td>
    `;
    approvalsTable.appendChild(row);
});

function approve(name, data) {
    // Send request to server to approve
}

function reject(name, data) {
    // Send request to server to reject
}
