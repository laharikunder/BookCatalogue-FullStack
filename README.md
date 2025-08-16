# 📚 Book Catalogue (MERN Stack)

A full-stack **Book Catalogue** web application built with **Next.js (Frontend)**, **Express.js (Backend)**, and **MongoDB**.  
This app lets users browse, add, update, and delete books in a simple and modern interface.

---

## 🚀 Features

- **Frontend:**  
  - Built with Next.js + Tailwind CSS  
  - Responsive UI for desktop and mobile  
  - Book listing with details modal  
  - Add and manage books easily
  - Reviews section for feedback  
  - Contact section for queries  

- **Backend:**  
  - Express.js REST API  
  - MongoDB with Mongoose ODM  
  - CRUD operations for books  
  - Environment variable configuration with `.env`

---

## 🛠 Tech Stack

**Frontend:**  
- Next.js  
- Tailwind CSS  

**Backend:**  
- Node.js  
- Express.js  
- MongoDB + Mongoose  
- dotenv

---

## 📂 Project Structure

BookCatalogue-FullStack/

├── backend/ # Express + MongoDB API

├── frontend/ # Next.js frontend

└── README.md

---

## ⚙️ Setup Instructions

### 1️⃣ Clone the Repository
git clone https://github.com/your-username/BookCatalogue-FullStack.git
cd BookCatalogue-FullStack

### 2️⃣ Setup Backend
cd backend
npm install


Create a .env file inside the backend folder:

MONGO_URI=your-mongodb-uri
PORT=5000


Run the backend server:

npm start

### 3️⃣ Setup Frontend
cd ../frontend
npm install


Start the development server:

npm run dev

---

## 🚀 Future Improvements

- Add authentication (login/signup)

- Deploy on cloud (Vercel + Render/Heroku)

- Add book cover image uploads
