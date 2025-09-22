# Giftify – Virtual & Physical Gift Store

![Giftify Homepage Screenshot](/src/assets/Giftify-HomePage.webp)

## Live Project

🔗 [Giftify Live](https://giftify-pro.netlify.app/)

## Overview

**Giftify** is an innovative e-commerce platform by **CodeSphere** that makes gifting effortless. It combines **instant digital gifting** (e-cards, animations, vouchers) with **on-demand physical gift delivery** (floral arrangements, engraved cards, curated bundles). Users can personalize gifts, add messages, and send them instantly by email or courier — perfect for birthdays, Eid, Valentine’s Day, anniversaries, or any celebration.

The platform is built with the **MERN stack**, providing a smooth cross-device experience and secure payments via **Stripe**.

## Technologies Used

* **Frontend:** React, React Router, React Hook Form, Tailwind CSS, TanStack Query, Axios
* **Backend & Database:** Node.js, Express.js, MongoDB (Mongoose ODM)
* **Authentication & Security:** Firebase Authentication (Email/Password, Google Sign-In)
* **Payment Integration:** Stripe
* **State Management & Utilities:** TanStack Query, LocalForage, Match Sorter
* **UI Enhancements:** Framer Motion, Keen Slider, Lottie, React Icons, SweetAlert2, React Toastify, Recharts, Lightbox

## Key Features

✅ **Home Page Highlights:** Popular categories & trending gifts displayed dynamically.

✅ **Dynamic Navbar with Profile Dropdown:** Highlights active routes and shows logged-in user’s avatar with dropdown options.

✅ **User Authentication & Security:**

* Firebase Email/Password signup & login
* Google Sign-In integration
* Forgot Password workflow
* Account lockout after multiple failed attempts (admin unlock required)

✅ **Gift Catalog:**

* Browse all gifts or filter by categories
* Sort gifts by price (ascending/descending)
* Debounced search for optimized performance

✅ **Gift Details & Cart Management:**

* View detailed product info
* Add/remove items from cart
* Update quantities & add custom messages

✅ **Checkout & Secure Payment:**

* Integrated with Stripe for fast & safe payments
* Auto-generated invoices with PDF download/print support

✅ **User Dashboard:**

* View past orders & payment history
* Edit profile details
* Contact support

✅ **Admin Dashboard:**

* View analytics (users, gifts, orders)
* Add/manage gifts
* Manage users (delete, unlock accounts, etc.)

---

## 🧪 Default Test Credentials

Use the following test account to explore Giftify:

| Role | Email               | Password     |
|------|---------------------|--------------|
| User | rasel123@gmail.com  | Rasel1234*   |

---

## Dependencies

The following dependencies are used in the project:

```json
{
  "@stripe/react-stripe-js": "^3.6.0",
  "@stripe/stripe-js": "^7.2.0",
  "@tanstack/react-query": "^5.74.4",
  "axios": "^1.8.4",
  "firebase": "^11.4.0",
  "framer-motion": "^12.5.0",
  "keen-slider": "^6.8.6",
  "localforage": "^1.10.0",
  "lottie-react": "^2.4.1",
  "lucide-react": "^0.483.0",
  "match-sorter": "^8.0.0",
  "motion": "^12.9.2",
  "react": "^19.0.0",
  "react-dom": "^19.0.0",
  "react-hook-form": "^7.54.2",
  "react-icons": "^5.5.0",
  "react-router-dom": "^7.3.0",
  "react-toastify": "^11.0.5",
  "recharts": "^2.15.2",
  "sort-by": "^1.2.0",
  "sweetalert2": "^11.17.2",
  "yet-another-react-lightbox": "^3.22.0"
}
```

---

## Installation & Running Locally

Follow these steps to run **Giftify** locally:

1. **Clone the repositories:**

   ```sh
   git clone https://github.com/Md-Siyam94/giftify-server.git
   git clone https://github.com/Md-Siyam94/giftify-client.git
   ```

2. **Install dependencies (both client & server):**

   ```sh
   npm install
   ```

3. **Set up environment variables:**
   Create a `.env.local` file inside `/giftify-client/` and a `.env` file inside `/giftify-server/`

   Example `.env.local`:

   ```sh
   VITE_apiKey=YOUR_FIREBASE_API_KEY
   VITE_authDomain=YOUR_FIREBASE_AUTH_DOMAIN
   VITE_projectId=YOUR_FIREBASE_PROJECT_ID
   VITE_storageBucket=YOUR_FIREBASE_STORAGE_BUCKET
   VITE_messagingSenderId=YOUR_FIREBASE_MESSAGING_SENDER_ID
   VITE_appId=YOUR_FIREBASE_APP_ID
   VITE_IMAGE_HOSTING_KEY=YOUR_IMAGE_HOSTING_KEY
   VITE_Payment_Gateway_PK=YOUR_STRIPE_PUBLIC_KEY
   ```

4. **Run the development servers:**

   **Backend:**

   ```sh
   cd giftify-server
   nodemon index.js
   ```

   **Frontend:**

   ```sh
   cd giftify-client
   npm run dev
   ```

5. Open [http://localhost:5173](http://localhost:5173) in your browser 🎁


## Support & Contact  
For questions or issues, please contact the CodeSphere project maintainer.


## API Documentation  
Base URL: `https://giftify-server-kappa.vercel.app`  
| Method | Endpoint                  | Description                |
|--------|---------------------------|----------------------------|
| GET    | /giftify/gifts            | Retrieve gift catalog      |
| GET    | /giftify/users            | Retrieve all users         |
| POST   | /giftify/gifts/create     | Create a new gift          |
| POST   | /giftify/users/create     | Register a new user        |
| POST   | /giftify/carts/create     | Add item to cart           |


---

## Additional Resources

* [Stripe Documentation](https://stripe.com/docs)
* [Firebase Authentication](https://firebase.google.com/docs/auth)
* [React Query](https://tanstack.com/query/latest/docs/react/overview)
* [MongoDB Documentation](https://www.mongodb.com/docs/)

---

## 👨‍💻 Contributors

Developed with ❤️ by **CodeSphere (EG-1011.5)**

* Md. Abdullah All Kafi
* Md. Siyam
* Radoan Ahmed
* Hafiz Al Shams *(Team Leader)*

---

🚀 **Giftify – Making Gifting Simple & Instant**

---
