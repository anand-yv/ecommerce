import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import cookieParser from "cookie-parser";

dotenv.config();


mongoose
    .connect(process.env.DATABASE_URI)
    .then(() => console.log("Database Connected."))
    .catch((error) => console.log("Unable to connect with database : ", error));

const app = express();
const PORT = process.env.PORT || 5000;

app.use(
    cors({
        origin: "http://localhost:5173/",
        methods: ["GET", "POST", "DELETE", "PUT"],
        allowedHeaders: [
            "Content-Type",
            "Authorization",
            "Cache-Control",
            "Expires",
            "Pragma",
        ],
        credentials: true,
    })
)

app.use(cookieParser());
app.use(express.json())


app.listen(PORT, () => console.log(`Server is now running at ${PORT}`))