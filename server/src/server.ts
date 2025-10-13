import express from "express"
import cors from "cors"
import dotenv from "dotenv"

import chatRoute from "./routes/chatRoute.ts"

dotenv.config();

const app = express();

app.use(cors({
    origin: ["http://localhost:5173", process.env.APP_BASE_URL as string],
}));

app.use(express.json());

app.use("/api/ai", chatRoute);

const PORT = process.env.PORT || 5001;

app.listen( PORT, () => {
    console.log("Server started on PORT:", PORT);
});
