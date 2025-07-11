import { Router } from "express";
import { AdminController } from "../controllers/adminCtrl"

const router = Router();
const adminController = new AdminController();

const { deleteJobPost, viewAllJobPost } = adminController;
 
router.get('/viewAllJobPost', viewAllJobPost);
router.post('/deletejob', deleteJobPost);

export default router;