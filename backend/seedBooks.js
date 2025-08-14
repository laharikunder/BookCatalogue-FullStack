const mongoose = require('mongoose');
const Book = require('./models/Book');
require('dotenv').config();

const books = [
  {
    title: "Atomic Habits",
    author: "James Clear",
    year: "2018",
    description: "A powerful guide to building good habits.",
    image: "https://m.media-amazon.com/images/I/91bYsX41DVL._AC_UF1000,1000_QL80_.jpg",
  },
  {
    title: "Can't Hurt Me",
    author: "David Goggins",
    year: "2018",
    description: "David Goggins' story of mental toughness.",
    image: "https://m.media-amazon.com/images/I/81YJFNc54lL._UF1000,1000_QL80_.jpg",
  },
  {
    title: "The Alchemist",
    author: "Paulo Coelho",
    year: "1988",
    description: "A philosophical story about following dreams.",
    image: "https://m.media-amazon.com/images/I/71aFt4+OTOL._AC_UF1000,1000_QL80_.jpg",
  },
  {
    title: "Sapiens",
    author: "Yuval Noah Harari",
    year: "2011",
    description: "A brief history of humankind.",
    image: "https://m.media-amazon.com/images/I/713jIoMO3UL._AC_UF1000,1000_QL80_.jpg",
  },
  {
    title: "1984",
    author: "George Orwell",
    year: "1949",
    description: "A dystopian novel about surveillance and control.",
    image: "https://m.media-amazon.com/images/I/71kxa1-0mfL._AC_UF1000,1000_QL80_.jpg",
  },
  {
    title: "Rich Dad Poor Dad",
    author: "Robert Kiyosaki",
    year: "1997",
    description: "Learnings on wealth and personal finance.",
    image: "https://m.media-amazon.com/images/I/81bsw6fnUiL._AC_UF1000,1000_QL80_.jpg",
  },
  {
    title: "The Psychology of Money",
    author: "Morgan Housel",
    year: "2020",
    description: "Timeless lessons on wealth and behavior.",
    image: "https://m.media-amazon.com/images/I/71g2ednj0JL._AC_UF1000,1000_QL80_.jpg",
  },
  {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    year: "1960",
    description: "Classic novel on justice and racial inequality.",
    image: "https://m.media-amazon.com/images/I/81OthjkJBuL._AC_UF1000,1000_QL80_.jpg",
  },
  {
    title: "The Subtle Art of Not Giving a F*ck",
    author: "Mark Manson",
    year: "2016",
    description: "Counterintuitive advice on living a better life.",
    image: "https://m.media-amazon.com/images/I/71QKQ9mwV7L._AC_UF1000,1000_QL80_.jpg",
  },
];

mongoose.connect(process.env.MONGODB_URI)
  .then(async () => {
    await Book.deleteMany(); // Optional: clear existing books
    await Book.insertMany(books);
    console.log("✅ Book data seeded!");
    mongoose.disconnect();
  })
  .catch((err) => console.error("❌ Seed error:", err));
