import { Router } from 'express';
import sensorRouter from './sensorRoute';


const router = Router();

router.use('/sensor', sensorRouter);


export default router;