const API_URL = "http://localhost:8080/api";

// -------------------- AUTH HELPERS --------------------
function saveToken(token) {
  localStorage.setItem("token", token);
}
function getToken() {
  return localStorage.getItem("token");
}
function saveUserId(id) {
  localStorage.setItem("userId", id);
}
function getUserId() {
  return localStorage.getItem("userId");
}

// -------------------- ON PAGE LOAD --------------------
document.addEventListener("DOMContentLoaded", () => {
  // Login
  const loginForm = document.getElementById("loginForm");
  if (loginForm) {
    loginForm.addEventListener("submit", async (e) => {
      e.preventDefault();
      const email = document.getElementById("email").value;
      const password = document.getElementById("password").value;

      const res = await fetch(`${API_URL}/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password })
      });
      const data = await res.json();

      if (res.ok) {
        saveToken(data.token);
        saveUserId(data.user._id);   // ✅ store userId

        if (data.user.role === "admin") {
          window.location.href = "admin.html";
        } else {
          window.location.href = "dashboard.html";
        }
      } else {
        alert(data.message || "Login failed");
      }
    });
  }

  // Register
  const registerForm = document.getElementById("registerForm");
  if (registerForm) {
    registerForm.addEventListener("submit", async (e) => {
      e.preventDefault();
      const name = document.getElementById("regName").value;
      const email = document.getElementById("regEmail").value;
      const password = document.getElementById("regPassword").value;

      const res = await fetch(`${API_URL}/auth/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password })
      });
      const data = await res.json();

      if (res.ok) {
        alert("Registered successfully, please login");
      } else {
        alert(data.message || "Registration failed");
      }
    });
  }

  // Explore Hotels
  if (document.getElementById("hotelContainer")) {
    loadHotels();
  }

  // Dashboard
  if (document.getElementById("myBookings")) {
    loadBookings();
  }

  // Admin
  if (document.getElementById("adminHotels")) {
    loadAdminHotels();
    loadAdminUsers();
    loadAdminBookings();

    const addHotelForm = document.getElementById("addHotelForm");
    addHotelForm.addEventListener("submit", async (e) => {
      e.preventDefault();
      const name = document.getElementById("hotelName").value;
      const city = document.getElementById("hotelCity").value;
      const price = document.getElementById("hotelPrice").value;

      const res = await fetch(`${API_URL}/hotels`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${getToken()}`
        },
        body: JSON.stringify({ name, city, price })
      });

      if (res.ok) {
        alert("Hotel added");
        loadAdminHotels();
      } else {
        alert("Failed to add hotel");
      }
    });
  }
});

// -------------------- HOTELS --------------------
async function loadHotels() {
  const res = await fetch(`${API_URL}/hotels`);
  const hotels = await res.json();
  const container = document.getElementById("hotelContainer");
  container.innerHTML = "";

  hotels.forEach(h => {
    const div = document.createElement("div");
    div.className = "hotel__card";
    div.innerHTML = `
      <h4>${h.name}</h4>
      <p>${h.city}</p>
      <p>$${h.price}</p>
      <button onclick="openBookingModal('${h._id}')">Book</button>
    `;
    container.appendChild(div);
  });
}

// -------------------- BOOKING MODAL --------------------
let selectedHotelId = null;

function openBookingModal(hotelId) {
  selectedHotelId = hotelId;
  document.getElementById("bookingModal").style.display = "block";
}

function closeModal() {
  document.getElementById("bookingModal").style.display = "none";
}

async function confirmBooking() {
  const checkIn = document.getElementById("checkIn").value;
  const checkOut = document.getElementById("checkOut").value;
  const userId = getUserId();

  if (!userId) {
    alert("Please log in first!");
    return;
  }

  if (!checkIn || !checkOut) {
    alert("Please select check-in and check-out dates.");
    return;
  }

  try {
    const res = await fetch(`${API_URL}/bookings`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${getToken()}`
      },
      body: JSON.stringify({
        user: userId,
        hotel: selectedHotelId,
        checkIn,
        checkOut
      })
    });

    const data = await res.json();
    if (res.ok) {
      alert("Booking successful!");
      closeModal();
    } else {
      alert(data.message || "Booking failed");
    }
  } catch (err) {
    console.error(err);
    alert("Booking failed. Please try again.");
  }
}

