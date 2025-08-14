const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");

dotenv.config(); // Load .env variables

const contactRoutes = require("./routes/contactRoutes");
const reviewRoutes = require("./routes/reviews");
const booksRouter = require("./routes/books");

const app = express();

const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/contact", contactRoutes);
app.use("/api/reviews", reviewRoutes);
app.use("/api/books", booksRouter);

// MongoDB Connection
mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("✅ Connected to local MongoDB"))
  .catch((err) => console.error("❌ MongoDB connection error:", err));

// Root Test Route
app.get("/", (req, res) => {
  res.send("✅ Backend is running!");
});

// Start Server
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
