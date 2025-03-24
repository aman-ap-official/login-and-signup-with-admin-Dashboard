https://github.com/user-attachments/assets/d23d3b0b-b817-439a-b222-9a49f5dc5079


# How It Works

User Registration:
The signup form saves user details (username, email, password) to localStorage. If the username already exists, an error is shown.

User Login:
The login form checks the entered credentials against the saved users in localStorage. On success, it displays a personalized home page.

Admin Login:
The admin login uses hardcoded credentials (in this example, username: admin and password: admin123). When successful, it shows an admin dashboard listing all registered users.

Navigation & UI:
The tabs (Login, Signup, and Admin) are switched using JavaScript functions. Once logged in, the container’s content is replaced with the appropriate homepage view.

This login form only HTML, CSS, and JavaScript to simulate user registration, login, and an admin dashboard without any backend technology like PHP.
