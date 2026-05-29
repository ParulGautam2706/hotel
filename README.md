# 🏨 Hotel Booking & Management Website

A full-stack hotel booking and management system built using Node.js, Express.js, HTML, CSS, and JavaScript.
This project provides hotel room exploration, booking management, user authentication, admin dashboard, and booking tracking functionalities.

---

# ✨ Features

## 👤 User Features

* User Registration & Login
* Hotel Room Exploration
* Online Room Booking
* Booking Management
* User Profile Management
* Cancel Bookings
* Responsive UI Design

---

## 🛠️ Admin Features

* Admin Dashboard
* Manage Users
* Manage Bookings
* View Cancelled Bookings
* Hotel Data Management

---

# 📂 Project Structure

```bash id="b2nq8x"
hotel/
│
├── backend/
│   ├── node_modules/
│   ├── public/
│   │   ├── assets/
│   │   ├── admin-dashboard.html
│   │   ├── admin.html
│   │   ├── bookings.html
│   │   ├── cancelled-bookings.html
│   │   ├── dashboard.html
│   │   ├── explore.html
│   │   ├── hotel.html
│   │   ├── index.html
│   │   ├── login.html
│   │   ├── manage-bookings.html
│   │   ├── manage-users.html
│   │   ├── profile.html
│   │   └── script.js
│   │
│   ├── src/
│   │   ├── config/
│   │   ├── controllers/
│   │   ├── middleware/
│   │   ├── models/
│   │   ├── routes/
│   │   ├── scripts/
│   │   └── index.js
│   │
│   ├── .env
│   ├── .gitignore
│   ├── package.json
│   ├── package-lock.json
│   ├── README.md
│   └── serve.js
```

---

# 🚀 Technologies Used

## Frontend

* HTML5
* CSS3
* JavaScript

## Backend

* Node.js
* Express.js

## Database

* MongoDB


## Other Tools

* dotenv
* middleware
* REST APIs

---

# ⚙️ Installation & Setup

## 1️⃣ Clone Repository

```bash id="5n4crh"
git clone https://github.com/your-username/hotel-booking-website.git
```

---

## 2️⃣ Move to Project Directory

```bash id="q4f9vf"
cd hotel/backend
```

---

## 3️⃣ Install Dependencies

```bash id="l81o3k"
npm install
```

---

## 4️⃣ Configure Environment Variables

Create a `.env` file inside backend folder.

Example:

```env id="5j1r5o"
PORT=5000
MONGO_URI=your_mongodb_connection
JWT_SECRET=your_secret_key
```

---

## 5️⃣ Start Server

```bash id="vvdk71"
npm start
```

OR

```bash id="ij8z9j"
node src/index.js
```

---

# 🌐 Pages Included

| Page                    | Description        |
| ----------------------- | ------------------ |
| index.html              | Homepage           |
| login.html              | User Login         |
| explore.html            | Explore Hotels     |
| hotel.html              | Hotel Details      |
| bookings.html           | User Bookings      |
| cancelled-bookings.html | Cancelled Bookings |
| dashboard.html          | User Dashboard     |
| admin-dashboard.html    | Admin Panel        |
| manage-users.html       | User Management    |
| manage-bookings.html    | Booking Management |
| profile.html            | User Profile       |

---

# 🔐 Authentication & Security

* Login Authentication
* Middleware Protection
* Environment Variables Security
* Protected Admin Routes

---

## 📸 Screenshots

Add screenshots here:

### Homepage
![Home](backend/public/assets/home page.png)

### Booking Page
![Booking Page](backend/public/assets/booking page.png)

### Admin Dashboard
![AdminDashboard](backend/public/assets/admin dashboard.png)
![AdminManageBooking](backend/public/assets/admin phase2.png)
![AdminMangeUsers](backend/public/assets/admin phase1.png)

### User Dashboard 
![UserDashboard](backend/public/assets/user dashboard.png)
![UserProfile](backend/public/assets/user profile.png)
![UserBooking](backend/public/assets/user phase1.png)
![UserCancellation](backend/public/assets/user phase2.png)

### Hotel Listing Page
![Hotels](backend/public/assets/hotel listing page.png)
---

# 🔮 Future Improvements

* Online Payment Integration
* Email Notifications
* OTP Verification
* Hotel Reviews & Ratings
* Room Availability Tracking
* Dark Mode UI
* AI-based Hotel Recommendations

---

# 👨‍💻 Author

Developed by **Santosh Gautam and Sahil Kaushik**
---

# ⭐ Support

If you like this project, give it a ⭐ on GitHub.
