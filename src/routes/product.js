import { Router } from 'express';
import ProductController from '../controllers/product';

const router = Router();

// GET: /api/product
router.get('/', ProductController.getUser)
router.post('/', )
router.patch('/')
router.delete('/')

export default router;