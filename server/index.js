import express from "express";
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.get("/", (req, res) => {
    res.send("Hello this is the Home Page ");
});

const PORT = process.env.PORT || 8001;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
