class ShortUrl {
    originalUrl: string;
    shortCode: string;
    expiry: Date;
    clickData: ClickData[];
    constructor(originalUrl: string, shortCode: string, validity: number) {
        this.originalUrl = originalUrl;
        this.shortCode = shortCode;
        this.expiry = new Date(Date.now() + validity * 60000); 
        this.clickData = [];
    }
    addClickData(referrer: string, timestamp: Date, location: string) {
        this.clickData.push({ referrer, timestamp, location });
    }
}
interface ClickData {
    referrer: string;
    timestamp: Date;
    location: string;
}
export { ShortUrl, ClickData };