import express from "express";
import { getAllProducts, getProduct, deleteProduct, updateProduct, createProduct } from "../controllers/Product.js";

const router = express.Router();

router.post('/v1/product', createProduct);
router.get('/v1/product', getAllProducts);
router.get('/v1/product/:productId', getProduct);
router.delete('/v1/product/:productId', deleteProduct);
router.put('/v1/product/:productId', updateProduct);

export default router;