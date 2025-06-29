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
    type?: string;
    rating?: number; // Added rating property
    type_skin?: string; // Added type_skin property
}
