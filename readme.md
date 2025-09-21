# 🚀 URL Shortener Backend

A secure and efficient **URL Shortener Backend** built with **Node.js, Express, and MongoDB**.  
This backend service allows registered users to shorten long URLs, manage them, and redirect short URLs to their original destinations.  
Authentication is handled via **JWT tokens**, ensuring that only authenticated users can create short URLs.

---

## 📑 Table of Contents

1. [Features](#-features)
2. [Tech Stack](#-tech-stack)
3. [Installation](#-installation)
4. [Environment Variables](#-environment-variables)
5. [API Endpoints](#-api-endpoints)
6. [Usage](#-usage)
7. [Folder Structure](#-folder-structure)

---

## ✨ Features

- Register and login users with **JWT-based authentication**
- Only authenticated users can generate short URLs
- Redirect short URLs to original links
- MongoDB persistence for users and URLs
- Authentication & error handling middleware
- Configurable environment variables

---

## 🛠 Tech Stack

- **Node.js** – JavaScript runtime
- **Express.js** – Web framework
- **MongoDB** – NoSQL database
- **Mongoose** – ODM for MongoDB
- **JWT (jsonwebtoken)** – Authentication
- **bcrypt.js** – Password hashing
- **dotenv** – Environment variable management

---

## ⚙️ Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/UTKARSHRAIKWAR/urlShortner-.git
   cd urlShortner-
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

4. For production:
   ```bash
   npm start
   ```

---

## 🔑 Environment Variables

Create a `.env` file in the root directory:

```env
PORT=5000
MONGO_URI=mongodb://localhost:27017/urlshortener
BASE_URL=http://localhost:5000
JWT_SECRET=your_jwt_secret
```

---

## 📡 API Endpoints

### **Auth Routes**

#### 1. Register User

**POST** `/api/users/register`

**Request Body:**

```json
{
  "username": "john_doe",
  "email": "john@example.com",
  "password": "password123"
}
```

**Response:**

```json
{
  "success": true,
  "message": "User registered successfully",
  "token": "jwt_token_here"
}
```

---

#### 2. Login User

**POST** `/api/users/login`

**Request Body:**

```json
{
  "email": "john@example.com",
  "password": "password123"
}
```

**Response:**

```json
{
  "success": true,
  "message": "Login successful",
  "token": "jwt_token_here"
}
```

---

### **URL Routes (Authenticated)**

#### 3. Create Short URL

**POST** `/api/shorten`

**Headers:**

```
Authorization: Bearer <jwt_token>
```

**Request Body:**

```json
{
  "longUrl": "https://www.example.com/some/very/long/url"
}
```

**Response:**

```json
{
  "success": true,
  "shortUrl": "http://localhost:5000/api/abc123",
  "urlCode": "abc123",
  "longUrl": "https://www.example.com/some/very/long/url"
}
```

---

#### 4. Redirect to Original URL

**GET** `/api/:urlCode`

**Example:**

```
GET http://localhost:5000/api/abc123
```

**Response:**

- Redirects to original URL if found
- If not found:

```json
{
  "success": false,
  "message": "URL not found"
}
```

---

## ▶️ Usage

1. Register a new user (`/api/auth/register`).
2. Login with credentials (`/api/auth/login`) to receive a **JWT token**.
3. Use the token in the `Authorization` header for protected routes.
4. Create a short URL using `/api/shorten`.
5. Access the short URL with `/api/:urlCode`.

---

## 📂 Folder Structure

```
backend/
├── config/
│   └── generateToken.js
├── controllers/
│   ├── url.controller.js
│   └── user.controller.js
├── middleware/
│   ├── authMiddleware.js
│   └── errorHandler.js
├── models/
│   ├── url.model.js
│   └── user.model.js
├── routes/
│   └── routes.js
├── utils/
│   └── db.js
├── .env
├── .env.sample
├── .gitignore
├── package.json
├── server.js
└── README.md
```

---

💡 Future Enhancements:

- Track number of clicks on each short URL
- User dashboard for managing URLs
- Expiration dates for short links
