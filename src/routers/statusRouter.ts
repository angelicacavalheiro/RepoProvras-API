import { Router } from 'express';
import * as controller from '../controllers/statusController'

const router = Router();

router.get('', controller.statusController);
router.get('/1', controller.statusController1);

export default router;