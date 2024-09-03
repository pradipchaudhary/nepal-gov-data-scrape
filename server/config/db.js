import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.DB_URL);
        console.log("Database connected.");
    } catch (error) {
        console.log("Databse connection error: ", error);
        process.exit();
    }
};

export default connectDB;
