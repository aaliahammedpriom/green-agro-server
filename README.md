# 🛒 Green Agro - Mini E-Commerce SPA

## 🌿 Project Overview

**Green Agro** is a modern, responsive, single-page e-commerce web application that allows users to browse agricultural products, view product details, manage a shopping cart, and simulate checkout without authentication. The app includes a lightweight Node.js/Express backend connected to a MongoDB database to serve and manage product and cart data.

---

## 📺 Live Demos

- 🌐 **Frontend:** [https://green-agro-93448.web.app](https://green-agro-93448.web.app)
- 🌐 **Backend API:** [https://green-agro-server.vercel.app](https://green-agro-server.vercel.app)

---

## ⚙️ Features

### Frontend
- ✅ Product listing (Home page)
- ✅ Product details page with dynamic routing
- ✅ Slide-in cart sidebar with:
  - Quantity controls
  - Cart total calculation
  - Checkout modal (Name, Email, Address)
- ✅ Fully responsive layout using Tailwind CSS
- ✅ State managed via React Context + Reducer
- ✅ React Router for client-side navigation

### Backend
- ✅ RESTful API with Express.js
- ✅ MongoDB for data persistence (products & cart)
- ✅ Cart API supports:
  - Add/update/delete items
  - Fetch by user email
  - Quantity manipulation
- ✅ Uses environment variables with `dotenv`

---

## 🛠️ Tech Stack

### Frontend
- **Framework:** React.js (Vite)
- **Routing:** React Router DOM
- **Styling:** Tailwind CSS
- **State Management:** React Context + useReducer
- **Deployment:** Firebase Hosting

### Backend
- **Server:** Node.js + Express
- **Database:** MongoDB Atlas
- **Deployment:** Vercel

---

## 🌐 Routing Structure

| Path            | Component         | Description                       |
| --------------- | ----------------- | --------------------------------- |
| `/`             | `Home`            | Homepage with product preview     |
| `/products`     | `Products`        | Full list of available products   |
| `/products/:id` | `ProductDetails`  | Detailed view of a single product |
| `/add-products` | `AddProductsForm` | Admin form to add new items       |

---

## 🧪 API Endpoints

### Product Routes
| Method | Endpoint        | Description              |
| ------ | --------------- | ------------------------ |
| GET    | `/products`     | Get all products         |
| GET    | `/products/:id` | Get single product by ID |
| POST   | `/products`     | Add a new product        |

### Cart Routes
| Method           | Endpoint                                                                       | Description                              |
| ---------------- | ------------------------------------------------------------------------------ | ---------------------------------------- |
| GET              | `/addtocart/:email`                                                            | Get cart items by user email             |
| DELETE           | `/addtocart/:email`                                                            | Clear all cart items by email            |
| POST             | `/addtocart`                                                                   | Add/update/delete item in cart via query |
| Query Parameters | `email`, `product_id`, `title`, `price`, `image`, `unit`, `decrease`, `delete` |

---

## 💻 Local Development

### Prerequisites

- Node.js
- MongoDB 
- Vite (for frontend)

### Clone the Repos

```bash
# Frontend
git clone https://github.com/aaliahammedpriom/green-agro-client.git
cd green-agro-client
npm install
npm run dev

# Backend
git clone http://github.com/aaliahammedpriom/green-agro-server.git
cd green-agro-server
npm install

#env
MONGO_URI = mongodb+srv://aaliahammedpriom66:xUGwNUmwnOb4nfZa@cluster0.pkkmt2q.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0

npm run start
# or
node index.js
Visit: http://localhost:5000


Developed by [A Ali Ahammed Priom]
Frontend Developer Assessment Task – Qtec Solution Limited

💚 Thank you for reviewing my project!
