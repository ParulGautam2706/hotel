document.addEventListener("DOMContentLoaded", () => {
  // Ensure user is logged in
  if (window.auth && typeof window.auth.requireLogin === "function") {
    window.auth.requireLogin();
  }

  // Helpers for localStorage
  function getCurrentUser() {
    try {
      return JSON.parse(localStorage.getItem("currentUser")) || {};
    } catch {
      return {};
    }
  }

  function getActiveBookings() {
    try {
      return JSON.parse(localStorage.getItem("activeBookings")) || [];
    } catch {
      return [];
    }
  }

  function saveActiveBookings(bookings) {
    localStorage.setItem("activeBookings", JSON.stringify(bookings));
  }

  function getCancelledBookings() {
    try {
      return JSON.parse(localStorage.getItem("cancelledBookings")) || [];
    } catch {
      return [];
    }
  }

  function saveCancelledBookings(bookings) {
    localStorage.setItem("cancelledBookings", JSON.stringify(bookings));
  }

  // Generate unique ID for each booking
  function generateBookingId() {
    return "b_" + Date.now() + "_" + Math.floor(Math.random() * 1000);
  }

  // Render active bookings
  function renderActiveBookings() {
    const currentUser = getCurrentUser();
    const active = getActiveBookings();
    const userActive = active.filter(b => b.user === currentUser.name);

    const tableBody = document.querySelector("#bookingTable tbody");
    if (!tableBody) return;

    tableBody.innerHTML = "";

    if (userActive.length === 0) {
      tableBody.innerHTML = `<tr><td colspan="6" style="text-align:center;">No active bookings.</td></tr>`;
      return;
    }

    userActive.forEach((b) => {
      const row = document.createElement("tr");
      row.innerHTML = `
        <td>${b.user}</td>
        <td>${b.hotel}</td>
        <td>${b.checkIn}</td>
        <td>${b.checkOut}</td>
        <td style="color:green;font-weight:bold;">${b.status}</td>
        <td><button class="cancel-btn">Cancel</button></td>
      `;

      // Cancel button logic using booking ID
      row.querySelector(".cancel-btn").addEventListener("click", () => {
        const cancelled = getCancelledBookings();
        cancelled.push({ ...b, status: "Cancelled" });
        saveCancelledBookings(cancelled);

        const updatedActive = active.filter(item => item.id !== b.id);
        saveActiveBookings(updatedActive);

        renderActiveBookings();
      });

      tableBody.appendChild(row);
    });
  }

  // Render cancelled bookings
  function renderCancelledBookings() {
    const currentUser = getCurrentUser();
    const cancelled = getCancelledBookings();
    const userCancelled = cancelled.filter(b => b.user === currentUser.name);

    const tableBody = document.querySelector("#cancelledBookingsTable tbody");
    if (!tableBody) return;

    tableBody.innerHTML = "";

    if (userCancelled.length === 0) {
      tableBody.innerHTML = `<tr><td colspan="6" style="text-align:center;">No cancelled bookings.</td></tr>`;
      return;
    }

    userCancelled.forEach((b) => {
      const row = document.createElement("tr");
      row.innerHTML = `
        <td>${b.user}</td>
        <td>${b.hotel}</td>
        <td>${b.checkIn}</td>
        <td>${b.checkOut}</td>
        <td style="color:red;font-weight:bold;">${b.status}</td>
        <td>
          <button class="restore-btn">Restore</button>
          <button class="delete-btn" style="margin-left:5px;color:white;background:red;">Delete Permanently</button>
        </td>
      `;

      // Restore button logic
      row.querySelector(".restore-btn").addEventListener("click", () => {
        const active = getActiveBookings();
        active.push({ ...b, status: "Confirmed" });
        saveActiveBookings(active);

        const updatedCancelled = cancelled.filter(item => item.id !== b.id);
        saveCancelledBookings(updatedCancelled);

        renderCancelledBookings();
      });

      // ✅ Delete Permanently button logic
      row.querySelector(".delete-btn").addEventListener("click", () => {
        const updatedCancelled = cancelled.filter(item => item.id !== b.id);
        saveCancelledBookings(updatedCancelled);

        renderCancelledBookings();
      });

      tableBody.appendChild(row);
    });
  }

  // Handle new booking form
  const addBookingForm = document.getElementById("addBookingForm");
  if (addBookingForm) {
    addBookingForm.addEventListener("submit", (e) => {
      e.preventDefault();

      const currentUser = getCurrentUser();
      const hotel = document.getElementById("hotelInput").value;
      const checkIn = document.getElementById("checkInInput").value;
      const checkOut = document.getElementById("checkOutInput").value;

      const newBooking = {
        id: generateBookingId(), // ✅ assign unique ID
        user: currentUser.name,
        hotel,
        checkIn,
        checkOut,
        status: "Confirmed"
      };

      const active = getActiveBookings();
      active.push(newBooking);
      saveActiveBookings(active);

      renderActiveBookings();
      addBookingForm.reset();
    });
  }

  // Decide which page we’re on
  if (document.getElementById("bookingTable")) {
    renderActiveBookings();
    window.addEventListener("storage", renderActiveBookings);
  }

  if (document.getElementById("cancelledBookingsTable")) {
    renderCancelledBookings();
    window.addEventListener("storage", renderCancelledBookings);
  }
});
