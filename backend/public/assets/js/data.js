// Load bookings from localStorage if available
window.bookings = JSON.parse(localStorage.getItem("bookings")) || [];

// Attach hotels to the global window object
window.hotels = [
  {
    id: 1,
    name: "City Lights Hotel",
    city: "New York",
    price: 2800,
    description: "Business hotel in the heart of the city.",
    image: "assets/images/hotel1.jpeg"
  },
  {
    id: 2,
    name: "Ocean View Resort",
    city: "Miami",
    price: 4200,
    description: "Beachside hotel with amazing amenities.",
    image: "assets/images/hotel2.jpeg"
  },
  {
    id: 3,
    name: "Ocean View Resort",
    city: "Goa",
    price: 4200,
    description: "Beachside resort with luxury amenities.",
    image: "assets/images/hotel3.jpeg"
  },
  {
    id: 7,
    name: "Paris Grand Hotel",
    city: "France, Paris",
    price: 10000,
    description: "Luxury hotel in the heart of Paris",
    image: "assets/images/hotel7.jpeg"
  },
  {
    id: 8,
    name: "Sunset Beach Resort",
    city: "Goa",
    price: 5000,
    description: "Beachside resort with luxury amenities.",
    image: "assets/images/hotel8.jpeg"
  },
  {
    id: 9,
    name: "Palm Grove Resort",
    city: "Goa",
    price: 6200,
    description: "Beachside resort with luxury amenities.",
    image: "assets/images/hotel9.jpeg"
  },
  {
    id: 10,
    name: "Royal Goa Palace",
    city: "Goa",
    price: 17000,
    description: "Beachside resort with luxury amenities.",
    image: "assets/images/hotel10.jpeg"
  },
  {
    id: 11,
    name: "Goa Beach House",
    city: "Goa",
    price: 8000,
    description: "Beachside resort with luxury amenities.",
    image: "assets/images/hotel11.jpeg"
  },
  {
    id: 12,
    name: "Taj Exotica",
    city: "Goa",
    price: 12000,
    description: "Beachside resort with luxury amenities.",
    image: "assets/images/hotel12.jpeg"
  },
  {
    id: 13,
    name: "Leela Palace",
    city: "Goa",
    price: 14000,
    description: "Beachside resort with luxury amenities.",
    image: "assets/images/hotel13.jpeg"
  },
  {
    id: 14,
    name: "Budget Beach Stay",
    city: "Goa",
    price: 2000,
    description: "Beachside resort with luxury amenities.",
    image: "assets/images/hotel14.jpeg"
  },
  {
    id: 15,
    name: "Premium Beach Resort",
    city: "Goa",
    price: 15000,
    description: "Beachside resort with luxury amenities.",
    image: "assets/images/hotel15.jpeg"
  },
  {
    id: 16,
    name: "Goa Luxury Villa",
    city: "Goa",
    price: 12000,
    description: "Beachside resort with luxury amenities.",
    image: "assets/images/hotel16.jpeg"
  },
  {
    id: 17,
    name: "Beach Paradise",
    city: "Goa",
    price: 7200,
    description: "Beachside resort with luxury amenities.",
    image: "assets/images/hotel17.jpeg"
  },
  {
    id: 18,
    name: "Goa Heritage Hotel",
    city: "Goa",
    price: 9000,
    description: "Beachside resort with luxury amenities.",
    image: "assets/images/hotel18.jpeg"
  },
  {
    id: 19,
    name: "Cozy Beach Cottage",
    city: "Goa",
    price: 3200,
    description: "Beachside resort with luxury amenities.",
    image: "assets/images/hotel19.jpeg"
  }
];

// Attach users to the global window object
window.users = [
  {
    id: 1,
    name: "Admin User",
    email: "admin@hotel.com",
    password: "admin123",
    role: "admin"
  },
  {
    id: 2,
    name: "Parul Gautam",
    email: "user@hotel.com",
    password: "user123",
    role: "user"
  }
];
