// -------------------- Manage Users Script --------------------

// LocalStorage se users read karo
function getUsers() {
  try {
    return JSON.parse(localStorage.getItem("users")) || [];
  } catch {
    return [];
  }
}

// Users ko save karo
function saveUsers(users) {
  localStorage.setItem("users", JSON.stringify(users));
}

// Dummy users agar localStorage empty hai
if (!localStorage.getItem("users")) {
  const demoUsers = [
    { username: "Alice", email: "alice@example.com", role: "user" },
    { username: "Bob", email: "bob@example.com", role: "user" },
    { username: "Admin", email: "admin@example.com", role: "admin" }
  ];
  saveUsers(demoUsers);
}

// Table render karne ka function
function renderUsers() {
  const users = getUsers();
  const tbody = document.querySelector("#usersTable tbody");

  tbody.innerHTML = ""; // clear pehle

  users.forEach((u, index) => {
    // Agar username missing ho toh email prefix le lo
    const displayName = u.username && u.username.trim() !== ""
      ? u.username
      : u.email.split("@")[0];

    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${displayName}</td>
      <td>${u.email}</td>
      <td>${u.role}</td>
      <td>
        <button class="edit-btn" data-index="${index}">Edit</button>
        <button class="delete-btn" data-index="${index}">Delete</button>
      </td>
    `;
    tbody.appendChild(row);
  });
}

// Edit user
function editUser(index) {
  const users = getUsers();
  const user = users[index];

  const newName = prompt("Enter new name:", user.username || user.email.split("@")[0]);
  const newEmail = prompt("Enter new email:", user.email);
  const newRole = prompt("Enter role (user/admin):", user.role);

  if (newName && newEmail && newRole) {
    users[index] = { username: newName, email: newEmail, role: newRole };
    saveUsers(users);
    renderUsers();
  }
}

// Delete user
function deleteUser(index) {
  let users = getUsers();
  if (confirm("Delete this user?")) {
    users.splice(index, 1);
    saveUsers(users);
    renderUsers();
  }
}

// Add new user from form
document.querySelector("#addUserForm").addEventListener("submit", (e) => {
  e.preventDefault();

  const username = document.querySelector("#username").value.trim();
  const email = document.querySelector("#email").value.trim();
  const role = document.querySelector("#role").value;

  if (username && email && role) {
    const users = getUsers();
    users.push({ username, email, role });
    saveUsers(users);
    renderUsers();

    // Reset form
    e.target.reset();
  }
});

// Event delegation (buttons ke liye)
document.addEventListener("click", (e) => {
  if (e.target.classList.contains("edit-btn")) {
    editUser(e.target.dataset.index);
  }
  if (e.target.classList.contains("delete-btn")) {
    deleteUser(e.target.dataset.index);
  }
});

// Page load hote hi render karo
document.addEventListener("DOMContentLoaded", renderUsers);
