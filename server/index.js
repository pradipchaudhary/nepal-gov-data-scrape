import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import router from "./routes/api.js";
import path from "path";
import { fileURLToPath } from "url";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 8001;

// Connection to MongoDB
connectDB();

// Resolve directory name for ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Log the resolved path to the public directory
const publicPath = path.join(__dirname, "../public");
console.log("Public folder path:", publicPath);
// Serve static files from the 'public' directory
app.use(express.static(publicPath));
app.set("view engine", "ejs");

// Routes
app.get("/", async (req, res) => {
    // const data = res.send("Hello this is the Home Page ");
});
app.use("/api", router);
// Start Server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
