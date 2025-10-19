declare namespace ProductType {
  interface ProductAll {
    category_id: number;
    brand_id: number;
    name: Name;
    description: string;
    thumbnail_url: string;
    how_to_use: Howtouse;
    manufacture_country: null;
    manufacture_flag: null;
    id: number;
  }

  interface ProductDetail {
    category_id: number;
    brand_id: number;
    name: Name;
    description: string;
    thumbnail_url: string;
    how_to_use: Name;
    manufacture_country: null;
    manufacture_flag: null;
    id: number;
    files: File[];
    retail_stock: Retailstock;
    category: Category;
    brand: Brand;
  }

  interface Brand {
    name: Name;
    description: null;
    thumbnail_url: string;
    origin_country: null;
    origin_flag: null;
    id: number;
  }

  interface Category {
    deleted_at: null;
    parent_id: number;
    code: string;
    name: Name;
    description: null;
    thumbnail_url: string;
    id: number;
  }

  interface Retailstock {
    product_id: number;
    stock_quantity: number;
    blocked_quantity: number;
    low_stock_alert: number;
    cost: number;
    price: number;
    id: number;
  }

  interface File {
    media_type: string;
    url: string;
    alt_text: string;
    is_primary: boolean;
  }

  interface Howtouse {
    en: En;
    kh: En;
  }

  interface Name {
    en: string;
    kh: string;
  }
}
