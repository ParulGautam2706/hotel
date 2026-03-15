document.addEventListener("DOMContentLoaded", () => {
  // For now, assume logged-in user
  const currentUser = ""; // Replace with session later

  window.bookHotel = function(hotelName, price) {
    const checkIn = prompt("Enter Check-in date (YYYY-MM-DD):");
    const checkOut = prompt("Enter Check-out date (YYYY-MM-DD):");

    if (checkIn && checkOut) {
      const newBooking = {
        user: currentUser,
        hotel: hotelName,
        checkIn,
        checkOut,
        status: "Pending",
        amount: price
      };

      BookingsAPI.add(newBooking); // Save globally 
      alert(`Booking confirmed for ${hotelName}!`);

      // Redirect to My Bookings page (optional)
      window.location.href = "my-bookings.html";
    }
  };
});
function openBookingModal(hotelId) {
  const modal = document.getElementById("bookingModal");
  const hotel = hotels.find(h => h.id === hotelId);
  if (!modal || !hotel) return;

  document.getElementById("modalHotelName").innerText = hotel.name;
  modal.style.display = "flex";

  document.getElementById("confirmBooking").onclick = () => {
  const checkIn = document.getElementById("checkIn").value;
  const checkOut = document.getElementById("checkOut").value;

  if (!checkIn || !checkOut) {
    alert("Please select check-in and check-out dates!");
    return;
  }

  if (new Date(checkOut) <= new Date(checkIn)) {
    alert("Check-out date must be after check-in date!");
    return;
  }

  const nights = calculateNights(checkIn, checkOut);
  const total = hotel.price * nights;

  // Save to localStorage for MyBookings & ManageBookings & Dashboard
  let bookings = JSON.parse(localStorage.getItem("bookings")) || [];
  bookings.push({
    id: Date.now(),
    user: "Guest",
    hotel: hotel.name,
    checkIn,
    checkOut,
    status: "Confirmed",
    amount: total
  });
  localStorage.setItem("bookings", JSON.stringify(bookings));

  alert(`✅ Booking confirmed for ${hotel.name}\nFrom: ${checkIn} To: ${checkOut}\nTotal: $${total}`);
  modal.style.display = "none";
};

}
