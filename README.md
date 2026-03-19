# 🏨 Hotel Booking System

This is a full-stack hotel booking website where users can explore hotels, book rooms, and manage their bookings.

---

## 🚀 Features

* View hotels and rooms
* Book rooms
* Manage bookings
* Admin dashboard
* User login system

---

## 🛠️ Tech Stack

* HTML, CSS, JavaScript
* Node.js, Express.js
* MongoDB (Database)

---

## 📁 Project Structure

```
hotel/
│── backend/
│   │── public/
│   │   ├── assets/
│   │   ├── index.html
│   │   ├── login.html
│   │   ├── dashboard.html
│   │   ├── explore.html
│   │   ├── hotel.html
│   │   ├── bookings.html
│   │   ├── cancelled-bookings.html
│   │   ├── manage-bookings.html
│   │   ├── manage-users.html
│   │   ├── profile.html
│   │   ├── admin.html
│   │   ├── admin-dashboard.html
│   │   └── script.js
│
│   │── src/
│   │   ├── config/
│   │   ├── controllers/
│   │   ├── middleware/
│   │   ├── models/
│   │   ├── routes/
│   │   └── index.js
│
│   │── .env
```

---

## ▶️ How to Run

1. Open terminal
2. Go to backend folder:

   ```
   cd backend
   ```
3. Install packages:

   ```
   npm install
   ```
4. Run server:

   ```
   node src/index.js
   ```

---

## 🔐 Environment Setup

Create a file named `.env` inside `backend` folder and add:

```
PORT=3000
MONGO_URI=your_mongodb_link
JWT_SECRET=secret123
```

---

## 🌐 Open in Browser

```
http://localhost:8080
```

---

## 🙋‍♀️ Author

Santosh Gautam
