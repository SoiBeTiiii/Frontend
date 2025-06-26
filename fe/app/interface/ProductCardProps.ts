export default interface ProductCardProps {
  id: number;
  slug: string;
  name?: string;
  image?: string;
  price?: number;
  originalPrice?: number;
  sold?: number;
  discount?: number;
  rating?: number;
}
