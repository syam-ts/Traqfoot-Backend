import { Router } from "express";
import { EmployerController } from "../controllers/employerCtrl";

const router = Router();
const employerController = new EmployerController();

const { viewAllJobPost, createJobPost } = employerController;

// Employer
router.get("/viewAllJobPost", viewAllJobPost);
router.post("/createjob", createJobPost);

export default router;