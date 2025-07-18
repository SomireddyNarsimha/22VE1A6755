import { Request, Response } from 'express';
import UrlService from '../services/urlService';
import { ShortUrl } from '../models/shorturl';

export class ShortUrlController {
    public urlService: UrlService;
    constructor() {
        this.urlService = new UrlService();
    }
    public async createShortUrl(req: Request, res: Response): Promise<void> {
        const { url, validity, shortcode } = req.body;
        try {
            const shortUrl = this.urlService.createShortUrl(url, validity, shortcode) as unknown as ShortUrl;
            res.status(201).json({
                shortLink: `http://hostname:port/${shortUrl.shortCode}`,
                expiry: shortUrl.expiry ? shortUrl.expiry.toISOString() : undefined
            });
        } catch (error) {
            const err = error as { status?: number; message?: string };
            res.status(err.status || 500).json({ error: err.message || 'Error' });
        }
    }
    public async getShortUrlStatistics(req: Request, res: Response): Promise<void> {
        const { shortcode } = req.params;

        try {
            const statistics = await this.urlService.getShortUrlStatistics(shortcode);
            res.status(200).json(statistics);
        } catch (error) {
            const err = error as { status?: number; message?: string };
            res.status(err.status || 500).json({ error: err.message || 'Error' });
        }
    }
}