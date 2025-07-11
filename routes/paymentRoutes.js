import express from "express";
import { createOrder, verifyPayment } from "../controllers/paymentController.js";
import { verifyToken } from "../middleware/auth.middleware";

const router = express.Router();

router.post("/create-order", verifyToken, createOrder);
router.post("/verify", verifyToken, verifyPayment);

export default router;
