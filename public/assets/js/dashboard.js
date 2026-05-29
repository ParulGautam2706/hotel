document.addEventListener("DOMContentLoaded", () => {
  // 🔒 Login guard
  window.auth.requireLogin();

  // 👤 Current user
  const user = getCurrentUser();
  if (user) {
    document.getElementById("userName").textContent = user.name;
  }

  // 📊 Load bookings
  const bookings = JSON.parse(localStorage.getItem("bookings")) || [];

  // --- Stats ---
  const active = bookings.filter(b => b.status === "Confirmed").length;
  const totalNights = bookings.reduce((sum, b) => {
    const start = new Date(b.checkIn);
    const end = new Date(b.checkOut);
    const diff = Math.ceil((end - start) / (1000 * 60 * 60 * 24));
    return sum + (diff > 0 ? diff : 0);
  }, 0);
  const totalSpent = bookings.reduce((sum, b) => sum + (b.amount || 0), 0);

  document.getElementById("activeBookings").textContent = active;
  document.getElementById("totalStays").textContent = totalNights;
  document.getElementById("amountSpent").textContent = `$${totalSpent}`;

  // --- Recent bookings (last 5) ---
  const tbody = document.getElementById("recentBookings");
  if (bookings.length === 0) {
    tbody.innerHTML = `<tr><td colspan="4" style="text-align:center;">No bookings yet</td></tr>`;
  } else {
    const recent = [...bookings].slice(-5).reverse();
    tbody.innerHTML = recent.map(b => `
      <tr>
        <td>${b.hotel}</td>
        <td>${b.checkIn} → ${b.checkOut}</td>
        <td>${b.status}</td>
        <td>$${b.amount}</td>
      </tr>
    `).join("");
  }

  // 🚪 Logout
  const logoutBtn = document.getElementById("logoutBtn");
  if (logoutBtn) {
    logoutBtn.addEventListener("click", (e) => {
      e.preventDefault();
      localStorage.removeItem("currentUser");
      window.location.href = "login.html";
    });
  }
});
