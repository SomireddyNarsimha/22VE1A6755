import { Router } from 'express';
import { ShortUrlController } from '../controllers/shorturlController';
const router = Router();
const shortUrlController = new ShortUrlController();
router.post('/', shortUrlController.createShortUrl.bind(shortUrlController));
router.get('/:shortcode', shortUrlController.getShortUrlStatistics.bind(shortUrlController));
export default router;