import express from "express"
import authRoute from "./routes/authRoute.js"
import productRoute from "./routes/productRoute.js"
import transactionRoute from "./routes/transactionRoute.js"

import { authMiddleware } from "./middleware/auth.js";

const app = express();

app.use(express.json());

app.use('/', authRoute);
app.use('/api', authMiddleware, productRoute);
app.use('/api', authMiddleware, transactionRoute);

const server = app.listen(3000, () => {
    console.log(`Server is running on port ${server.address().port}`);
})