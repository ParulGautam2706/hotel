// -------- LOGIN HANDLER --------
document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.getElementById("loginForm");

  if (loginForm) {
    loginForm.addEventListener("submit", (e) => {
      e.preventDefault();

      const email = document.getElementById("email").value.trim();
      const password = document.getElementById("password").value.trim();

      // Hardcoded admin + guest
      const defaultUsers = [
        { name: "Admin", email: "admin@hotel.com", password: "admin123", role: "admin" },
        { name: "Guest", email: "guest@hotel.com", password: "guest123", role: "user" }
      ];

      // Fetch users stored from register
      let storedUsers = JSON.parse(localStorage.getItem("users")) || [];

      // Merge both arrays
      const users = [...defaultUsers, ...storedUsers];

      // Find user
      const user = users.find(u => u.email === email && u.password === password);

      if (!user) {
        alert("❌ Invalid email or password!");
        return;
      }

      // Save current user
      localStorage.setItem("currentUser", JSON.stringify(user));

      // Redirect based on role
      if (user.role === "admin") {
        window.location.href = "admin-dashboard.html";
      } else {
        window.location.href = "dashboard.html";
      }
    });
  }

  // -------- REGISTER HANDLER --------
  const registerForm = document.getElementById("registerForm");

  if (registerForm) {
    registerForm.addEventListener("submit", (e) => {
      e.preventDefault();

      const name = document.getElementById("regName").value.trim();
      const email = document.getElementById("regEmail").value.trim();
      const password = document.getElementById("regPassword").value.trim();

      let users = JSON.parse(localStorage.getItem("users")) || [];

      if (users.some(u => u.email === email)) {
        alert("⚠️ User already exists with this email!");
        return;
      }

      const newUser = { name, email, password, role: "user" }; // default user

      users.push(newUser);
      localStorage.setItem("users", JSON.stringify(users));
      localStorage.setItem("currentUser", JSON.stringify(newUser));

      alert("✅ Registration successful! Redirecting to dashboard...");
      window.location.href = "dashboard.html";
    });
  }
});
