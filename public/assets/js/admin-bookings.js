document.addEventListener("DOMContentLoaded", () => {
  // Dummy bookings (replace with API later)
  let bookings = [
    { id: 1, user: "Alice", hotel: "Hilton", checkIn: "2025-08-20", checkOut: "2025-08-22" },
    { id: 2, user: "Bob", hotel: "Marriott", checkIn: "2025-08-25", checkOut: "2025-08-27" }
  ];

  const tableBody = document.querySelector("#adminBookingsTable tbody");

  function renderBookings() {
    tableBody.innerHTML = "";
    bookings.forEach(b => {
      const row = `
        <tr>
          <td>${b.user}</td>
          <td>${b.hotel}</td>
          <td>${b.checkIn}</td>
          <td>${b.checkOut}</td>
          <td>
            <button class="action-btn edit-btn" onclick="editBooking(${b.id})">Edit</button>
            <button class="action-btn delete-btn" onclick="deleteBooking(${b.id})">Delete</button>
          </td>
        </tr>
      `;
      tableBody.innerHTML += row;
    });
  }

  // Delete booking
  window.deleteBooking = function(id) {
    bookings = bookings.filter(b => b.id !== id);
    renderBookings();
    alert("Booking deleted!");
  };

  // Edit booking
  window.editBooking = function(id) {
    const booking = bookings.find(b => b.id === id);
    if (!booking) return;

    const newHotel = prompt("Enter new Hotel:", booking.hotel);
    const newCheckIn = prompt("Enter new Check-In Date:", booking.checkIn);
    const newCheckOut = prompt("Enter new Check-Out Date:", booking.checkOut);

    if (newHotel && newCheckIn && newCheckOut) {
      booking.hotel = newHotel;
      booking.checkIn = newCheckIn;
      booking.checkOut = newCheckOut;
      renderBookings();
      alert("Booking updated!");
    }
  };

  renderBookings();
});
