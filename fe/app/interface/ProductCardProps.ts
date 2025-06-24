export default interface ProductCardProps {
  slug: string;
  name?: string;
  image?: string;
  price?: number;
  originalPrice?: number;
  sold?: number;
  discount?: number;
  rating?: number;
}
