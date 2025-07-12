import { Router } from 'express';
import sensorRouter from './sensorRoute';
import userRouter from './userRoute';


const router = Router();

router.use('/sensor', sensorRouter);
router.use('/user', userRouter);


export default router;