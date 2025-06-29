import baseAxios from './baseAxios';
import ProductCardProps from '../app/interface/ProductCardProps';
import { ProductDetail } from '../app/interface/ProductDetail';

// Define FilterParams type if not already defined or import it from the correct location
type FilterParams = {
  keyword?: string;
  sort?: string;
  brands?: string[];
  types?: string[];
  type_skin?: string[];
  price_range?: string[];
};


export const fetchProducts = async (filters: FilterParams = {}): Promise<ProductCardProps[]> => {
  const searchParams = new URLSearchParams();
  if (filters.keyword) {
    searchParams.append("keyword", filters.keyword);
  }


  if (filters.sort) searchParams.append("sort", filters.sort);

  if (filters.brands && filters.brands.length > 0) {
    searchParams.append("brand", filters.brands.join(","));
  }
  if (filters.types && filters.types.length > 0) {
    searchParams.append("type", filters.types.join(","));
  }
  if (filters.type_skin && filters.type_skin.length > 0) {
    searchParams.append("type_skin", filters.type_skin.join(","));
  }

  if (filters.price_range && filters.price_range.length > 0) {
    searchParams.append("price_range", filters.price_range.join(","));
  }

  const baseUrl = process.env.NEXT_PUBLIC_API_URL || '';
  const url = `${baseUrl}/products?${searchParams.toString()}`;

  const res = await baseAxios.get(url);

  const data = res.data as { data: any[] };

  const mapped = data.data.map((item) => {
    const sortedVariants = (item.variants || []).sort(
      (a: { sale_price: number }, b: { sale_price: number }) => a.sale_price - b.sale_price
    );

    const variant = sortedVariants[0];
    const price = variant?.sale_price ?? 0;
    const originalPrice = variant?.price ?? 0;
    const discount = originalPrice > 0 && price > 0
      ? Math.round(100 - (price * 100) / originalPrice)
      : 0;

    return {
      id: item.id,
      name: item.name,
      slug: item.slug,
      image: item.image,
      type: item.type,
      type_skin: item.type_skin ?? '', // Ensure type_skin is included
      price,
      originalPrice,
      discount,
      sold: Math.floor(Math.random() * 100),
      rating: item.average_rating ?? 0,
    };
  });
  console.log("LOAI DA ĐANG CHỌN:", filters.type_skin);

  console.log('Request URL:', url);

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

