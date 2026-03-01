export interface Product {
    id: string; // ID
    type: string; // Type
    sku: string; // SKU
    name: string; // Name
    published: boolean; // Published
    isFeatured: boolean; // Is featured?
    visibility: 'visible' | 'hidden' | 'search'; // Visibility in catalog
    description: string; // Description
    saleDateStart?: string; // Date sale price starts
    saleDateEnd?: string; // Date sale price ends
    salePrice?: number; // Sale price
    inStock: boolean; // In stock?
    stock: number; // Stock
    lowStockAmount: number; // Low stock amount
    weight: number; // Weight (g)
    volume: number; // volume (ml)
    allowReviews: boolean; // Allow customer reviews?
    purchaseNote: string; // Purchase note
    regularPrice: number; // Regular price
    categories: string[]; // Categories
    images: string[]; // Images
    brand: string; // Brand
}

export const SKIN_CARE_SUBCATEGORIES = [
    "Extracts", "Serums", "Beauty Kits", "Hair Care", "Creams", "Lotions", "Cleanser", "Tonner", "Lipsticks", "Facial Care"
];

export const PRODUCTS: Product[] = [
    {
        id: 'sc1',
        type: 'simple',
        sku: 'SKU-001',
        name: 'Vitamin C Serum',
        published: true,
        isFeatured: true,
        visibility: 'visible',
        description: 'Brightens and evens skin tone with high-strength Vitamin C.',
        inStock: true,
        stock: 50,
        lowStockAmount: 5,
        weight: 120,
        volume: 30,
        allowReviews: true,
        purchaseNote: 'Apply 3-4 drops to clean skin breakfast and dinner.',
        regularPrice: 45,
        categories: ['Serums', 'Facial Care'],
        images: ['https://images.unsplash.com/photo-1596462502278-27bf85033c5a?auto=format&fit=crop&q=80&w=600'],
        brand: 'CutiXa Adore'
    },
    {
        id: 'sc2',
        type: 'simple',
        sku: 'SKU-002',
        name: 'Hydrating Cleanser',
        published: true,
        isFeatured: false,
        visibility: 'visible',
        description: 'Creamy cleanser that preserves natural moisture.',
        inStock: true,
        stock: 80,
        lowStockAmount: 10,
        weight: 250,
        volume: 200,
        allowReviews: true,
        purchaseNote: 'Massage onto damp face.',
        regularPrice: 35,
        categories: ['Cleanser'],
        images: ['https://images.unsplash.com/photo-1556227702-d1e4e7b5c232?auto=format&fit=crop&q=80&w=600'],
        brand: 'CutiXa Adore'
    },
    {
        id: 'sc3',
        type: 'simple',
        sku: 'SKU-003',
        name: 'Anti-Aging Cream',
        published: true,
        isFeatured: true,
        visibility: 'visible',
        description: 'Night cream with retinol for fine line reduction.',
        inStock: true,
        stock: 30,
        lowStockAmount: 5,
        weight: 150,
        volume: 50,
        allowReviews: true,
        purchaseNote: 'Use only at night.',
        regularPrice: 65,
        categories: ['Creams'],
        images: ['https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&q=80&w=600'],
        brand: 'CutiXa Adore'
    },
    {
        id: 'sc4',
        type: 'simple',
        sku: 'SKU-004',
        name: 'Herbal Extract',
        published: true,
        isFeatured: false,
        visibility: 'visible',
        description: 'Pure herbal extracts for skin rejuvenation.',
        inStock: true,
        stock: 100,
        lowStockAmount: 10,
        weight: 100,
        volume: 30,
        allowReviews: true,
        purchaseNote: 'Mix with your daily moisturizer.',
        regularPrice: 25,
        categories: ['Extracts'],
        images: ['https://images.unsplash.com/photo-1612817288484-6f916006741a?auto=format&fit=crop&q=80&w=600'],
        brand: 'CutiXa Adore'
    },
    {
        id: 'sc5',
        type: 'simple',
        sku: 'SKU-005',
        name: 'Glow Tonic',
        published: true,
        isFeatured: true,
        visibility: 'visible',
        description: 'Exfoliating toner for a radiant complexion.',
        inStock: true,
        stock: 45,
        lowStockAmount: 5,
        weight: 300,
        volume: 250,
        allowReviews: true,
        purchaseNote: 'Use after cleansing.',
        regularPrice: 40,
        categories: ['Tonner'],
        images: ['https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?auto=format&fit=crop&q=80&w=600'],
        brand: 'CutiXa Adore'
    },
    {
        id: 'sc6',
        type: 'simple',
        sku: 'SKU-006',
        name: 'Velvet Rose Lipstick',
        published: true,
        isFeatured: true,
        visibility: 'visible',
        description: 'Matte finish lipstick with long-lasting pigment.',
        inStock: true,
        stock: 150,
        lowStockAmount: 15,
        weight: 30,
        volume: 4,
        allowReviews: true,
        purchaseNote: 'Apply directly to lips.',
        regularPrice: 18,
        categories: ['Lipsticks'],
        images: ['https://images.unsplash.com/photo-1586790170083-2f9ceadc732d?auto=format&fit=crop&q=80&w=600'],
        brand: 'CutiXa Adore'
    },
    {
        id: 'sc7',
        type: 'simple',
        sku: 'SKU-007',
        name: 'Complete Beauty Kit',
        published: true,
        isFeatured: true,
        visibility: 'visible',
        description: 'A comprehensive bundle for your daily routine.',
        inStock: true,
        stock: 20,
        lowStockAmount: 2,
        weight: 1200,
        volume: 1000,
        allowReviews: true,
        purchaseNote: 'Best value pack.',
        regularPrice: 120,
        salePrice: 95,
        categories: ['Beauty Kits', 'Facial Care'],
        images: ['https://images.unsplash.com/photo-1512496011931-d21d8fa92196?auto=format&fit=crop&q=80&w=600'],
        brand: 'CutiXa Adore'
    }
];


