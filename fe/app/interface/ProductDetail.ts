export interface ProductVariant {
  id: number;
  sku: string;
  price: number;
  sale_price: number;
  image: string;
  quantity: number;
  options: {
    name: string;
    value: string;
  }[];
}

export interface ProductReview {
  name: string;
  image: string | null;
  rating: number;
  comment: string;
  date: string;
}

export interface RelatedProduct {
  id: number;
  name: string;
  slug: string;
  price: number;
  sale_price: number;
  brand: string;
  image: string;
  average_rating: number;
  review_count: number;
}

export interface ProductDetail {
  id: number;
  name: string;
  slug: string;
  brand: string;
  image: string;
  status: string;
  average_rating: number;
  review_count: number;
  reviews: ProductReview[];
  variants: ProductVariant[];
  related: RelatedProduct[];
}
