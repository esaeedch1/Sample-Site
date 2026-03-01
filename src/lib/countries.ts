export interface Country {
    name: string;
    code: string;
    currency: string;
    symbol: string;
    rate: number; // rate against USD
}

export const COUNTRIES: Country[] = [
    { name: "Pakistan", code: "PK", currency: "PKR", symbol: "Rs", rate: 280 },
    { name: "Australia", code: "AU", currency: "AUD", symbol: "A$", rate: 1.5 },
    { name: "New Zealand", code: "NZ", currency: "NZD", symbol: "NZ$", rate: 1.6 },
    { name: "United Kingdom", code: "GB", currency: "GBP", symbol: "£", rate: 0.8 },
    { name: "United States", code: "US", currency: "USD", symbol: "$", rate: 1 },
    { name: "Canada", code: "CA", currency: "CAD", symbol: "C$", rate: 1.35 },
    { name: "South Africa", code: "ZA", currency: "ZAR", symbol: "R", rate: 19 },
    { name: "Bangladesh", code: "BD", currency: "BDT", symbol: "৳", rate: 110 },
    { name: "United Arab Emirates", code: "AE", currency: "AED", symbol: "د.إ", rate: 3.67 },
    { name: "Saudi Arabia", code: "SA", currency: "SAR", symbol: "SR", rate: 3.75 },
    { name: "Germany", code: "DE", currency: "EUR", symbol: "€", rate: 0.92 },
    { name: "France", code: "FR", currency: "EUR", symbol: "€", rate: 0.92 },
    { name: "China", code: "CN", currency: "CNY", symbol: "¥", rate: 7.2 },
    { name: "India", code: "IN", currency: "INR", symbol: "₹", rate: 83 },
    { name: "Japan", code: "JP", currency: "JPY", symbol: "¥", rate: 150 },
];
