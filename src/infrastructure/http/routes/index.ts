import { Router } from 'express';
import employerRouter from './employerRoute';
import jokseekerRouter from './jobSeekerRoute';
import adminRouter from './adminRoute';


const router = Router();

router.use('/employer', employerRouter);
router.use('/jobseeker', jokseekerRouter);
router.use('/admin', adminRouter);


export default router;