import express from "express";
import { viewPlanById , viewAllAvailablePlans} from "../controllers/planController.js";
import { viewAllAvailablePrpducts , viewProductById} from "../controllers/productController.js";
import { verifyToken } from "../middleware/auth.middleware";

const router = express.Router();

router.get("/view-plan", verifyToken, subscribedPlansOfUser);

router.get("/view-allPlans", verifyToken, viewAllAvailablePlans);

router.get("/view-product", verifyToken, subscribedPlansOfUser);

router.get("/view-allProducts", verifyToken, viewAllAvailablePlans);

export default router;
