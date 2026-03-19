// Sample Hotel Data (can later come from DB or API)
const hotels = [
  {
    id: 1,
    name: "City Lights Hotel",
    city: "New York",
    price: 2800,
    image: "assets/images/hotel1.jpeg",
    description: "Business hotel in the heart of the city."
  },
  {
    id: 2,
    name: "Mountain Nest",
    city: "Manali",
    price: 3500,
    image: "assets/images/hotel2.jpeg",
    description: "Hillside stay with scenic mountain views."
  },
 
   {
    id: 3,
    name: "Ocean View Resort",
    city: "Goa",
    price: 4200,
    image: "assets/images/hotel3.jpeg",
    description: "Beachside resort with luxury amenities."
  },
  {
    id: 7,
    name: "Paris Grand Hotel",
    city: "France, Paris",
    price: 10000,
    image: "assets/images/hotel7.jpeg",
    description: "Luxury hotel in the heart of Paris"
  },
  {
    id: 8,
    name: "Sunset Beach Resort",
    city: "Goa",
    price: 5000,
    image: "assets/images/hotel8.jpeg",
    description: "Beachside resort with luxury amenities."
  },
  {
    id: 9,
    name: "Palm Grove Resort",
    city: "Goa",
    price: 6200,
    image: "assets/images/hotel9.jpeg",
    description: "Beachside resort with luxury amenities."
  },
  {
    id: 10,
    name: "Royal Goa Palace",
    city: "Goa",
    price: 17000,
    image: "assets/images/hotel10.jpeg",
    description: "Beachside resort with luxury amenities."
  },
  {
    id: 11,
    name: "Goa Beach House",
    city: "Goa",
    price: 8000,
    image: "assets/images/hotel11.jpeg",
    description: "Beachside resort with luxury amenities."
  },
  {
    id: 12,
    name: "Taj Exotica",
    city: "Goa",
    price: 12000,
    image: "assets/images/hotel12.jpeg",
    description: "Beachside resort with luxury amenities."
  },
  {
    id: 13,
    name: "Leela Palace",
    city: "Goa",
    price: 14000,
    image: "assets/images/hotel13.jpeg",
    description: "Beachside resort with luxury amenities."
  },
  {
    id: 14,
    name: "Budget Beach Stay",
    city: "Goa",
    price: 2000,
    image: "assets/images/hotel14.jpeg",
    description: "Beachside resort with luxury amenities."
  },
  {
    id: 15,
    name: "Premium Beach Resort",
    city: "Goa",
    price: 15000,
    image: "assets/images/hotel15.jpeg",
    description: "Beachside resort with luxury amenities."
  },
  {
    id: 16,
    name: "Goa Luxury Villa",
    city: "Goa",
    price: 12000,
    image: "assets/images/hotel16.jpeg",
    description: "Beachside resort with luxury amenities."
  },
  {
    id: 17,
    name: "Beach Paradise",
    city: "Goa",
    price: 7200,
    image: "assets/images/hotel17.jpeg",
    description: "Beachside resort with luxury amenities."
  },
  {
    id: 18,
    name: "Goa Heritage Hotel",
    city: "Goa",
    price: 9000,
    image: "assets/images/hotel18.jpeg",
    description: "Beachside resort with luxury amenities."
  },
  {
    id: 19,
    name: "Cozy Beach Cottage",
    city: "Goa",
    price: 3200,
    image: "assets/images/hotel19.jpeg",
    description: "Beachside resort with luxury amenities."
  }
];

// Render hotels in Explore Page
function loadHotels() {
  const container = document.getElementById("hotel-list");
  if (!container) return;

  container.innerHTML = hotels.map(hotel => `
    <div class="hotel__card">
      <img src="${hotel.image}" alt="${hotel.name}" onerror="this.src='assets/images/hotelbck.jpeg'">
      <h3>${hotel.name}</h3>
      <p><strong>$${hotel.price}</strong></p>
      <p>${hotel.description}</p>
      <div class="hotel__actions">
        <button class="btn btn-view" onclick="viewHotel(${hotel.id})">View</button>
        <button class="btn btn-book" onclick="openBookingModal(${hotel.id})">Book</button>
      </div>
    </div>
  `).join("");
}

// Redirect to Hotel Detail Page
function viewHotel(hotelId) {
  window.location.href = `hotel.html?id=${hotelId}`;
}

// Booking Modal Logic
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
    alert(`✅ Booking confirmed for ${hotel.name}\nFrom: ${checkIn} To: ${checkOut}`);
    modal.style.display = "none";
  };
}

// Close Modal
function closeModal() {
  document.getElementById("bookingModal").style.display = "none";
}

// Run hotel loader when page loads
document.addEventListener("DOMContentLoaded", loadHotels);
// app.js

// Utility function to calculate number of nights between two dates
function calculateNights(checkIn, checkOut) {
  const start = new Date(checkIn);
  const end = new Date(checkOut);
  const diffTime = Math.abs(end - start);
  return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
}

// assets/js/app.js

// --- Storage helpers ---
function getCurrentUser() {
  try { return JSON.parse(localStorage.getItem("currentUser")); }
  catch { return null; }
}

function setCurrentUser(user) {
  localStorage.setItem("currentUser", JSON.stringify(user));
}

// --- Auth Guards (use on protected pages) ---
window.auth = {
  requireLogin() {
    const u = getCurrentUser();
    if (!u) window.location.href = "login.html";
  },
  requireAdmin() {
    const u = getCurrentUser();
    if (!u || u.role !== "admin") window.location.href = "login.html";
  }
};

// --- Logout handler (works from ANY page) ---
document.addEventListener("click", (e) => {
  const btn = e.target.closest("#logoutBtn");
  if (!btn) return;

  e.preventDefault();


  localStorage.removeItem("currentUser");

  // Optional: sessionStorage bhi clear karna ho to
  // sessionStorage.clear();

  // Redirect to login page
  window.location.href = "login.html";
});
// --- Register New User ---
document.addEventListener("DOMContentLoaded", () => {
  const registerForm = document.getElementById("registerForm");
  if (registerForm) {
    registerForm.addEventListener("submit", (e) => {
      e.preventDefault();

      const name = document.getElementById("regName").value.trim();
      const email = document.getElementById("regEmail").value.trim();
      const password = document.getElementById("regPassword").value.trim();

      if (!name || !email || !password) {
        alert("Please fill all fields!");
        return;
      }

      let users = JSON.parse(localStorage.getItem("users")) || [];

      // check if user already exists
      if (users.some(u => u.email === email)) {
        alert("User already exists with this email!");
        return;
      }

      // New user object
      const newUser = {
        name,
        email,
        password,
        role: "user"   // default role
      };

      users.push(newUser);
      localStorage.setItem("users", JSON.stringify(users));

      // Set as current user (auto login)
      localStorage.setItem("currentUser", JSON.stringify(newUser));

      alert("✅ Registration successful! Redirecting to dashboard...");
      window.location.href = "dashboard.html";
    });
  }
});
