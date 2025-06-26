import baseAxios from './baseAxios';
import ProductCardProps from '../app/interface/ProductCardProps';
import { ProductDetail } from '../app/interface/ProductDetail';


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
      id: item.id,
      slug: item.slug,
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


export const fetchProductBySlug = async (slug: string): Promise<ProductDetail | null> => {
  try {
    const res = await baseAxios.get(`product/${slug}`);
    const responseData = res.data as { data: any[] };
    const data = responseData.data;

    if (!data || data.length === 0) return null;

    return data[0]; // vì bạn trả về mảng
  } catch (err) {
    console.error('ăn lồn :', err);
    return null;
  }
};

