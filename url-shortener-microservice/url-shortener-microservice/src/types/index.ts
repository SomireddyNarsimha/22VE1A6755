export interface ShortUrl {
    originalUrl: string;
    shortCode: string;
    expiry: Date;
    clickData: ClickData[];
}
export interface ClickData {
    timestamp: Date;
    referrer: string;
    location: string; 
}