import { Router } from 'express';

import user from './userRoute';


const router = Router();

router.use('/user', user);

export default router;
