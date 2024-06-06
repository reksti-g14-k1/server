import express from "express";
import { getAllTransactions, getTransaction, deleteTransaction, updateTransaction, createTransaction } from "../controllers/Transaction.js";

const router = express.Router();

router.post('/v1/transaction', createTransaction);
router.get('/v1/transaction', getAllTransactions);
router.get('/v1/transaction/:transactionId', getTransaction);
router.delete('/v1/transaction/:transactionId', deleteTransaction);
router.put('/v1/transaction/:transactionId', updateTransaction);

export default router;