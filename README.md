# EcommerceApp 🛍️

An E-commerce platform built with React for the frontend and Node.js/Express for the backend, leveraging MongoDB for database management and Tailwind CSS for styling.

## Badges 🏅

[![JavaScript](https://img.shields.io/badge/javascript-yellow.svg?style=for-the-badge&logo=javascript)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)](https://react.dev/)
[![Node.js](https://img.shields.io/badge/node.js-6DA554?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/)
[![Express.js](https://img.shields.io/badge/express.js-%23404d5e.svg?style=for-the-badge&logo=express&logoColor=white)](https://expressjs.com/)
[![MongoDB](https://img.shields.io/badge/MongoDB-%2347A247.svg?style=for-the-badge&logo=mongodb&logoColor=white)](https://www.mongodb.com/)
[![Tailwind CSS](https://img.shields.io/badge/tailwindcss-%2338B200.svg?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)

## Description 📝

This project is a full-stack e-commerce application that allows users to browse products, add them to their cart, and manage their accounts. The backend handles product management, user authentication, and cart operations, while the frontend provides a user-friendly interface for shopping.

## Table of Contents 📚

- [Features](#features-)
- [Tech Stack](#tech-stack-)
- [Installation](#installation-)
- [Usage](#usage-)
- [Project Structure](#project-structure-)
- [API Reference](#api-reference-if-applicable-)
- [Footer](#footer-)

## Features ✨

- **Product Management:** Admin can add, remove, and view products. 📦
- **User Authentication:** Secure user registration and login system. 🔐
- **Shopping Cart:** Users can add and remove items from their shopping cart. 🛒
- **Product Display:** View product details and images. 🖼️
- **Responsive Design:** Frontend is built with Tailwind CSS for a responsive user experience. 📱
- **Category Filtering:** Browse products by category (Men, Women, Kids). 👔👧

## Tech Stack 💻

- **Frontend:** React, Vite, Tailwind CSS, React Router DOM
- **Backend:** Node.js, Express.js, Mongoose, JWT, Multer, CORS
- **Database:** MongoDB
- **Development Tools:** ESLint, Vitest (potential, not explicitly configured)

## Installation 🚀

### Prerequisites:

- **Node.js:** Ensure you have Node.js installed (v18 or higher recommended).
- **MongoDB:** A running MongoDB instance (local or cloud-based).

### Backend Setup:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/iMubashirSyed/EcommerceApp.git
   cd EcommerceApp/backend
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Configure MongoDB connection:**
   Update the `MONGODB_URI` in `backend/index.js` to your MongoDB connection string.
   ```javascript
   // Example:
   mongoose.connect("mongodb://127.0.0.1:27017/Ecommerce"); 
   ```

4. **Start the backend server:**
   ```bash
   node index.js
   ```
   The backend will run on `http://localhost:4000`.

### Frontend Setup:

1. **Navigate to the frontend directory:**
   ```bash
   cd ../frontend
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the frontend development server:**
   ```bash
   npm run dev
   ```
   The frontend will be accessible at `http://localhost:5173` (or the port specified by Vite).

**Note:** Ensure the backend server is running before starting the frontend.

## Usage 🛒

This e-commerce application is designed for both users and administrators.

### User-facing features:

- **Browsing Products:** Navigate through different product categories (Men, Women, Kids) or view all products on the homepage.
- **Product Details:** Click on a product to view its details, including images and price.
- **Add to Cart:** Add desired products to your shopping cart.
- **View Cart:** Review items in your cart, adjust quantities, and see the subtotal.
- **Authentication:** Create an account or log in to manage your cart and potentially future features like order history.

### Admin functionalities:

- **Access Admin Panel:** Navigate to the admin section (likely via a specific route if not directly accessible).
- **Add New Products:** Use the 'Add Product' form to upload product images, set names, categories, and prices.
- **Manage Products:** View a list of all existing products and remove them as needed.

**Example Flow:**

1. **User:** Visits the site, browses `Men` category. Adds a jacket to the cart.
2. **User:** Navigates to the `Cart` page to see the added jacket.
3. **User:** Clicks `Login` and then `Sign Up` to create a new account.
4. **Admin:** Logs into the admin panel, goes to `Add Product`, uploads a new t-shirt image, sets its details, and saves it.
5. **User:** Refreshes the `Shop` page and sees the newly added t-shirt available.

## Project Structure 📂

```
EcommerceApp/
├── admin/
│   ├── public/
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   ├── pages/
│   │   └── ...
│   ├── eslint.config.js
│   ├── index.html
│   ├── package.json
│   └── vite.config.js
├── backend/
│   ├── upload/
│   │   └── images/
│   ├── index.js
│   └── package.json
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── Components/
│   │   │   ├── assets/
│   │   │   ├── navbar/
│   │   │   └── ...
│   │   ├── context/
│   │   ├── pages/
│   │   └── ...
│   ├── eslint.config.js
│   ├── index.html
│   ├── package.json
│   └── vite.config.js
└── README.md
```

## API Reference (Backend Endpoints) 🌐

### Products

- **`POST /upload`**: Uploads a product image. Accepts `multipart/form-data` with a field named `product`.
  - **Response:** `{ success: 1, image_url: "<url>" }`

- **`POST /addproduct`**: Adds a new product to the database.
  - **Request Body:** `{ name: string, image: string, category: string, new_price: number }`
  - **Response:** `{ success: true, message: "Product Added Successfully" }`

- **`POST /removeproduct`**: Removes a product by its ID.
  - **Request Body:** `{ id: number }`
  - **Response:** `{ message: "Product Removed Successfully" }`

- **`GET /allproducts`**: Retrieves all products.
  - **Response:** `Array<Product>`

- **`GET /newcollection`**: Retrieves products for the new collection section.
  - **Response:** `Array<Product>`

- **`GET /popularinwomen`**: Retrieves popular products in the women's category.
  - **Response:** `Array<Product>`

### User Authentication & Cart

- **`POST /signup`**: Registers a new user.
  - **Request Body:** `{ name: string, email: string, password: string }`
  - **Response:** `{ success: true, token: string }` or `{ success: false, message: string }`

- **`POST /login`**: Logs in an existing user.
  - **Request Body:** `{ email: string, password: string }`
  - **Response:** `{ success: true, token: string }` or `{ success: false, message: string }`

- **`POST /addtocart`**: Adds a product to the user's cart (requires `authToken`).
  - **Request Body:** `{ id: string }` (Product ID)
  - **Response:** `{ success: true, message: "Added to cart" }`

- **`POST /removecart`**: Removes a product from the user's cart (requires `authToken`).
  - **Request Body:** `{ id: string }` (Product ID)
  - **Response:** `{ success: true, message: "Removed from cart" }`

- **`POST /getcartdata`**: Retrieves the user's cart data (requires `authToken`).
  - **Response:** `Object` (Cart data)

**Authentication Middleware:**
- The `fetchuser` middleware is used to authenticate requests using JWTs from the `authToken` header.
- 

## Footer 🖥️

Made with ❤️ by [iMubashirSyed](https://github.com/iMubashirSyed)
Connect with me on [LinkedIn](https://www.linkedin.com/in/syed-mubashir-ali-15a217253/) 


> If you find this project helpful, please consider starring 🌟, forking 🍴, and opening issues ❗ if you encounter any problems.
