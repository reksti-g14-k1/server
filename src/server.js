import express from "express"
import authRoute from "./routes/authRoute.js"
import productRoute from "./routes/productRoute.js"
import transactionRoute from "./routes/transactionRoute.js"

import dotenv from "dotenv";
import { authMiddleware } from "./middleware/auth.js";
dotenv.config();

const app = express();

app.use(express.json());

app.use('/', authRoute);
app.use('/api', authMiddleware, productRoute);
app.use('/api', transactionRoute);

const server = app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${server.address().port}`);
})