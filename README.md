# Hi Tutor 🎓

**Hi Tutor** is a full-stack online tutor booking platform that allows users to book tutors, and tutors to add, update, or remove their listings. This project is built using modern tools like **React**, **Express**, **MongoDB**, **Firebase Auth**, **TanStack Query**,**axios** and **TailwindCSS with DaisyUI** for an interactive and responsive UI.

🔗 **Live Site:** [visit live site](https://online-tutor-booking-5eb85.web.app/)
🔗 **Backend Repository:** [visit backend repository](https://github.com/Hujaifa81/online-language-tutor-booking-backend)

---

## 🚀 Features

### 🔐 Authentication
- Firebase Authentication (Goggle,Email & Password login)
- JWT-based session with secure HTTP-only cookies

### 👩‍🏫 Tutors Module
- Add, update, delete tutors
- Tutors categorized by language
- View tutors by popularity (review-based)
- Pagination support with dynamic search and filters
- Categories dynamically loaded from database

### 📅 Booking System
- Book any listed tutor
- View all bookings made by the user

### 📦 Tech Stack
**Frontend:**
- React
- React Router DOM
- React Hook Form
- TanStack React Query
- Axios (with interceptors)
- DaisyUI (via Tailwind CSS)
- Swiper.js (carousel)
- Dark mode support

**Backend:**
- Express.js
- MongoDB Atlas
- CORS + Cookie-parser
- JSON Web Tokens (JWT)

---

## ⚙️ Functionalities

- 🔁 **Pagination** on the Tutors listing page
- 🔎 **Search and Filter** tutors by language
- 🔄 **Loading Spinner** using spinner during API calls
- 📈 **Review Counter** increases with each user interaction
- ✅ **Axios Interceptors** used for attaching JWT in requests and handling errors globally
- ⚡ **React Query** used for efficient caching, loading state handling, and data re-fetching
- 🧭 **Dynamic Page Titles** per route for better UX
- 🔐 **Private Routes** restrict access to authenticated users only

---

### Core Functionalities
- Tutor listing & search
- Booking logic
- Protected routes using JWT
- Firebase-based auth
- Add/edit/delete tutors (authenticated users only)


