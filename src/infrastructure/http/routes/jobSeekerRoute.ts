import { Router } from "express"; 
import { JobSeekerController } from "../controllers/jobSeekerCtrl"; 

const router = Router(); 
const jobSeekerController = new JobSeekerController(); 
const { applyjob } = jobSeekerController; 


router.post('/applyjob', applyjob);

export default router;