document.addEventListener("DOMContentLoaded", () => {
  if (!localStorage.getItem("currentUser")) {
    localStorage.setItem("currentUser", JSON.stringify({ name: "Parul" }));
  }

  if (!localStorage.getItem("activeBookings")) {
    const activeBookings = [
      {
        id: "b1",
        user: "Parul",
        hotel: "Royal Palace",
        checkIn: "2026-01-25",
        checkOut: "2026-01-28",
        status: "Confirmed"
      },
      {
        id: "b2",
        user: "Parul",
        hotel: "Ocean View",
        checkIn: "2026-02-10",
        checkOut: "2026-02-15",
        status: "Confirmed"
      }
    ];
    localStorage.setItem("activeBookings", JSON.stringify(activeBookings));
  }

  if (!localStorage.getItem("cancelledBookings")) {
    const cancelledBookings = [
      {
        id: "c1",
        user: "Parul",
        hotel: "Mountain Retreat",
        checkIn: "2025-12-01",
        checkOut: "2025-12-05",
        status: "Cancelled"
      }
    ];
    localStorage.setItem("cancelledBookings", JSON.stringify(cancelledBookings));
  }
});
