document.getElementById('loginForm').addEventListener('input', function() {
    var email = document.getElementById('email').value.trim();
    var password = document.getElementById('password').value.trim();
    var loginBtn = document.getElementById('loginBtn');
    
    if (email !== '' && password !== '') {
      loginBtn.removeAttribute('disabled');
    } else {
      loginBtn.setAttribute('disabled', 'disabled');
    }
  });
  
  document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission for this example
    var email = document.getElementById('email').value.trim();
    var password = document.getElementById('password').value.trim();
    
    // Here you can add logic to validate the email and password
    // For this example, let's just log the values and redirect to the leave application page
    console.log('Email:', email);
    console.log('Password:', password);
    window.location.href = "employeefes.html"; // Redirect to the leave application page
  });
  