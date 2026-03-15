document.addEventListener("DOMContentLoaded", () => {
  const nav = document.createElement("nav");
  nav.className = "main-nav";

  nav.innerHTML = `
    <div class="nav-centre">
      <span class="logo">🏨 ROYAL HOTELS</span>
    </div>

    <div class="nav-links">
      <a href="index.html">Home</a>
      <a href="bookings.html">My Bookings</a>
      <a href="dashboard.html">Dashboard</a>
      <a href="cancelled-bookings.html">Cancelled</a>
      <a href="profile.html">Profile</a>
      <a href="#" id="logoutBtn">Logout</a>
    </div>
  `;

  document.body.prepend(nav);

  document.getElementById("logoutBtn")?.addEventListener("click", () => {
    window.auth.logout();
  });
});
