class UrlService {
    public shortUrls: Map<string, { originalUrl: string; expiry: Date; clickData: Array<{ timestamp: Date; referrer: string; location: string }> }> = new Map();

    public createShortUrl(originalUrl: string, validity: number = 30, customShortcode?: string) {
            const shortcode = customShortcode || this.generateUniqueShortcode();
            const expiry = new Date(Date.now() + validity * 60000);
            
            this.shortUrls.set(shortcode, { originalUrl, expiry, clickData: [] });
            
            return shortcode;
        }
    public getShortUrlStatistics(shortcode: string) {
        const shortUrlData = this.shortUrls.get(shortcode);
        if (!shortUrlData) {
            throw new Error('No short URL found');
        }

        return {
            originalUrl: shortUrlData.originalUrl,
            expiry: shortUrlData.expiry,
            clickData: shortUrlData.clickData,
            totalClicks: shortUrlData.clickData.length,
        };
    }
    public trackClick(shortcode: string, referrer: string, location: string) {
        const shortUrlData = this.shortUrls.get(shortcode);
        if (shortUrlData && shortUrlData.expiry > new Date()) {
            shortUrlData.clickData.push({ timestamp: new Date(), referrer, location });
        } else {
            throw new Error('No short URL found');
        }
    }
    public generateUniqueShortcode(): string {
        return Math.random().toString(36).substring(2, 8);
    }
}
export default UrlService;