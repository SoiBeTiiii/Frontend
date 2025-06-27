import baseAxios from './baseAxios';
import ProductCardProps from '../app/interface/ProductCardProps';
import { ProductDetail } from '../app/interface/ProductDetail';


export const fetchProducts = async ({ sort }: { sort?: string } = {}): Promise<ProductCardProps[]> => {

  const res = await baseAxios.get('products', {
    params: {
      sort: sort || undefined, // nếu có sort thì sẽ được thêm vào query string
    },
    baseURL: process.env.NEXT_PUBLIC_API_URL, // đảm bảo baseURL được sử dụng
  }); // tự nối baseURL

  const data = res.data as { data: any[] };
  const raw = data.data;

  const mapped = raw.map((item) => {
  const variant = (item.variants || []).sort((a: { sale_price: number }, b: { sale_price: number }) => a.sale_price - b.sale_price)[0];
  const price = variant?.sale_price || 0;
  const originalPrice = variant?.price || 0;
  const discount = (originalPrice > 0 && price > 0)
    ? Math.round(100 - (price * 100) / originalPrice)
    : 0;
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
console.log(mapped.map(p => ({ name: p.name, price: p.price })));
  return mapped;
};

export const fetchProductBySlug = async (slug: string): Promise<ProductDetail | null> => {
  try {
    const res = await baseAxios.get<{ data: ProductDetail[] }>(`product/${slug}`);
    const data = res.data?.data?.[0];
    return data || null;
  } catch (err) {
    console.error('Lỗi khi fetch chi tiết sản phẩm:', err);
    return null;
  }
};

