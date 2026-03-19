// -------------------- Manage Bookings Script --------------------

// Read bookings from localStorage
function getBookings() {
  try {
    return JSON.parse(localStorage.getItem("bookings")) || [];
  } catch {
    return [];
  }
}

// Save bookings to localStorage
function saveBookings(bookings) {
  localStorage.setItem("bookings", JSON.stringify(bookings));
}

// Read cancelled bookings
function getCancelledBookings() {
  try {
    return JSON.parse(localStorage.getItem("cancelledBookings")) || [];
  } catch {
    return [];
  }
}

// Save cancelled bookings
function saveCancelledBookings(cancelled) {
  localStorage.setItem("cancelledBookings", JSON.stringify(cancelled));
}

// Dummy data if none exist
if (!localStorage.getItem("bookings")) {
  const demoBookings = [
    { hotel: "City Lights Hotel", checkIn: "2025-08-21", checkOut: "2025-08-27", status: "Confirmed" },
    { hotel: "Sunset Beach Resort", checkIn: "2025-08-27", checkOut: "2025-09-20", status: "Confirmed" }
  ];
  saveBookings(demoBookings);
}

// Render active bookings
function renderBookings() {
  const bookings = getBookings();
  const tbody = document.querySelector("#bookingsTable tbody");

  tbody.innerHTML = ""; // clear

  if (bookings.length === 0) {
    tbody.innerHTML = `<tr><td colspan="5" style="text-align:center; color:#666;">No active bookings</td></tr>`;
    return;
  }

  bookings.forEach((b, index) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${b.hotel}</td>
      <td>${b.checkIn}</td>
      <td>${b.checkOut}</td>
      <td>${b.status}</td>
      <td>
        <button class="cancel-btn" data-index="${index}">Cancel</button>
      </td>
    `;
    tbody.appendChild(row);
  });
}

// Render cancelled bookings
function renderCancelledBookings() {
  const cancelled = getCancelledBookings();
  const tbody = document.querySelector("#cancelledBookingsTable tbody");

  tbody.innerHTML = "";

  if (cancelled.length === 0) {
    tbody.innerHTML = `<tr><td colspan="4" style="text-align:center; color:#666;">No cancelled bookings</td></tr>`;
    return;
  }

  cancelled.forEach((b) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${b.hotel}</td>
      <td>${b.checkIn}</td>
      <td>${b.checkOut}</td>
      <td style="color:red;font-weight:bold;">${b.status}</td>
    `;
    tbody.appendChild(row);
  });
}


// Cancel booking (move to cancelled list)
function cancelBooking(index) {
  let bookings = getBookings();
  let cancelled = getCancelledBookings();

  if (confirm("Are you sure you want to cancel this booking?")) {
    const cancelledBooking = bookings.splice(index, 1)[0];
    cancelledBooking.status = "Cancelled";

    cancelled.push(cancelledBooking);

    saveBookings(bookings);
    saveCancelledBookings(cancelled);

    renderBookings();
    renderCancelledBookings();
  }
}

// Event delegation for cancel button
document.addEventListener("click", (e) => {
  if (e.target.classList.contains("cancel-btn")) {
    cancelBooking(e.target.dataset.index);
  }
});

// Page load
document.addEventListener("DOMContentLoaded", () => {
  renderBookings();
  renderCancelledBookings();
});
