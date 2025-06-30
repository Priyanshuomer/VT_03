import express from "express";
import verifyToken from "../middleware/verifyToken";
import { submitContactForm } from "../controllers/contactController";

const router = express.Router();

router.post("/", verifyToken ,submitContactForm); 

export default router;
