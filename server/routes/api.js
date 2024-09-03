import { Router } from "express";
import { localDetails } from "../controllers/scrapeController.js";

const router = Router();

// Route the scrape data
router.get("/scrape", localDetails);

export default router;
