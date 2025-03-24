// Function to switch between Login and Signup tabs
function openTab(evt, tabName) {
    var i, tabcontent, tablinks;
    // Hide all elements with class "tabcontent"
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    // Remove the "active" class from all tab buttons
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    // Display the selected tab by setting its display to "block"
    document.getElementById(tabName).style.display = "block";
    // If an event is provided, add the "active" class to the clicked button
    if (evt) {
      evt.currentTarget.className += " active";
    }
  }
  
  // Function to display the Admin Login form and hide other forms
  function openAdmin() {
    document.getElementById("login").style.display = "none"; // Hide login form
    document.getElementById("signup").style.display = "none"; // Hide signup form
    document.querySelector(".tab").style.display = "none";    // Hide tab navigation
    document.getElementById("admin").style.display = "block";   // Show admin form
  }
  
  // Function to return from admin view back to the user login/signup view
  function backToUser() {
    document.getElementById("admin").style.display = "none"; // Hide admin form
    document.querySelector(".tab").style.display = "flex";     // Show tab navigation
    openTab(null, 'login'); // Set the login tab as active
  }
  
  // Utility function to get the list of users from localStorage
  function getUsers() {
    // Parse JSON string from localStorage; return an empty array if no users exist
    return JSON.parse(localStorage.getItem("users")) || [];
  }
  
  // Utility function to save the list of users to localStorage
  function saveUsers(users) {
    localStorage.setItem("users", JSON.stringify(users));
  }
  
  // Function to display the welcome screen for a logged-in user in full-screen mode
  function showHome(username) {
    const container = document.querySelector(".container");
    // Add the "full-screen" class to change container styling
    container.classList.add("full-screen");
    // Replace container's inner HTML with the welcome screen markup
    container.innerHTML = `
      <div id="home" class="welcome-screen">
        <h2>Welcome, ${username}!</h2>
        <p>We're happy to have you back.</p>
        <button onclick="logout()">Logout</button>
      </div>
    `;
  }
  
  // Function to display the admin dashboard in full-screen mode
  function showAdminHome() {
    const users = getUsers();
    let usersList = "";
    // If no users are registered, show a message; otherwise, display a table of users
    if (users.length === 0) {
      usersList = "<p>No users registered.</p>";
    } else {
      usersList = `
        <table>
          <thead>
            <tr>
              <th>Username</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>`;
      // Loop through each user and add a row to the table
      users.forEach(user => {
        usersList += `
            <tr>
              <td>${user.username}</td>
              <td>${user.email}</td>
            </tr>`;
      });
      usersList += `
          </tbody>
        </table>`;
    }
    const container = document.querySelector(".container");
    // Apply full-screen styling
    container.classList.add("full-screen");
    // Replace container's content with the admin dashboard markup
    container.innerHTML = `
      <div id="adminHome" class="admin-panel">
        <h2>Admin Dashboard</h2>
        <h3>Registered Users</h3>
        ${usersList}
        <button onclick="logout()">Logout</button>
      </div>
    `;
  }
  
  // Function to log out by reloading the page
  function logout() {
    location.reload();
  }
  
  // Event listener for Signup form submission
  document.getElementById("signupForm").addEventListener("submit", function(e) {
    e.preventDefault(); // Prevent default form submission behavior
    // Get input values from the signup form
    const username = document.getElementById("signupUsername").value;
    const email = document.getElementById("signupEmail").value;
    const password = document.getElementById("signupPassword").value;
    
    let users = getUsers();
    // Check if the username already exists
    const existingUser = users.find(u => u.username === username);
    if (existingUser) {
      alert("Username already exists. Please choose another.");
      return;
    }
    
    // Add the new user to the array and save to localStorage
    users.push({ username, email, password });
    saveUsers(users);
    alert("Signup successful!");
    // Show the welcome screen for the new user
    showHome(username);
  });
  
  // Event listener for Login form submission
  document.getElementById("loginForm").addEventListener("submit", function(e) {
    e.preventDefault(); // Prevent default form submission behavior
    // Get input values from the login form
    const username = document.getElementById("loginUsername").value;
    const password = document.getElementById("loginPassword").value;
    
    let users = getUsers();
    // Check if the entered username and password match a stored user
    const user = users.find(u => u.username === username && u.password === password);
    if (user) {
      alert("Login successful!");
      // Show the welcome screen for the logged-in user
      showHome(username);
    } else {
      alert("Invalid username or password.");
    }
  });
  
  // Event listener for Admin form submission
  document.getElementById("adminForm").addEventListener("submit", function(e) {
    e.preventDefault(); // Prevent default form submission behavior
    // Get input values from the admin form
    const adminUsername = document.getElementById("adminUsername").value;
    const adminPassword = document.getElementById("adminPassword").value;
    
    // Check hardcoded admin credentials (change these as needed)
    if (adminUsername === "admin" && adminPassword === "admin123") {
      alert("Admin login successful!");
      // Display the admin dashboard
      showAdminHome();
    } else {
      alert("Invalid admin credentials.");
    }
  });
  