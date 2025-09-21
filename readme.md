# 🚀 URL Shortener Backend

A simple and efficient **URL Shortener Backend** built with **Node.js, Express, and MongoDB**.  
This backend service allows users to shorten long URLs, manage them, and redirect short URLs to their original destinations.

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

- Shorten long URLs into compact short links.
- Redirect to original URLs using the short code.
- MongoDB persistence for storing short and original URLs.
- Authentication middleware (extendable for users).
- Error handling middleware for cleaner responses.
- Configurable environment variables for easy deployment.

---

## 🛠 Tech Stack

- **Node.js** – JavaScript runtime
- **Express.js** – Web framework
- **MongoDB** – NoSQL database
- **Mongoose** – ODM for MongoDB
- **dotenv** – Environment variable management

---

## ⚙️ Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/url-shortener-backend.git
   cd url-shortener-backend
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

Create a `.env` file in the root directory and add the following:

```env
PORT=5000
MONGO_URI=mongodb://localhost:27017/urlshortener
BASE_URL=http://localhost:5000
JWT_SECRET=your_jwt_secret   # if authentication is used
```

---

## 📡 API Endpoints

### 1. **Create Short URL**

**POST** `/api/shorten`

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

### 2. **Redirect to Original URL**

**GET** `/api/:urlCode`

**Example:**

```
GET http://localhost:5000/api/abc123
```

**Response:**

- Redirects to `https://www.example.com/some/very/long/url`.
- If not found:

```json
{
  "success": false,
  "message": "URL not found"
}
```

---

## ▶️ Usage

1. Send a `POST` request to `/api/shorten` with a long URL.
2. Receive a shortened URL in response.
3. Access the short URL `/api/:urlCode` to get redirected to the original link.

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

💡 You can extend this backend with authentication, analytics (e.g., click counts), or user-specific URL management.
