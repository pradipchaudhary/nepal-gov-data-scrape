import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import router from "./routes/api.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 8001;

// Connection to MongoDB
connectDB();

// Middleware
app.use(express.json());
app.use(express.static("public"));
app.set("view engine", "ejs");
// app.set("views", path.join(__dirname, "views"));

// Routes
app.get("/", (req, res) => {
    res.send("Hello this is the Home Page ");
});
app.use("/api", router);
// Start Server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
