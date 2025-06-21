import baseAxios from './baseAxios';
import ProductCardProps from '../app/interface/ProductCardProps';

export const fetchProducts = async (): Promise<ProductCardProps[]> => {
  const res = await baseAxios.get('products'); // tự nối baseURL

  const data = res.data as { data: any[] };
  const raw = data.data;

  const mapped = raw.map((item) => {
    const variant = item.variants?.[0]; // chỉ lấy variant đầu
    const price = variant?.sale_price || 0;
    const originalPrice = variant?.price || 0;
    const discount = originalPrice && price ? Math.round(100 - (price * 100) / originalPrice) : 0;

    return {
      name: item.name,
      image: item.image,
      price,
      originalPrice,
      sold: Math.floor(Math.random() * 100), // bạn có thể lấy sold từ BE nếu có
      discount,
      rating: item.average_rating,
    };
  });

  return mapped;
};
