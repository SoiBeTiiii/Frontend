export default interface PromotionCard {
  id: number;
  slug?: string;
  name?: string;
  image?: string;
  price?: number;
  originalPrice?: number;
  sold?: number;
  discount?: number;
  promotionName?: string;
  endDate?: string;
}
