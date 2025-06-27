// lib/promotionApi.ts
import baseAxios from './baseAxios';

export async function fetchPromotions() {
  try {
    const res = await baseAxios.get('/promotions'); // Đã đúng endpoint
    // Assuming the expected type of data is { data: any }
    const data = res.data as { data: any };
    return data.data; // Trả ra object chứa các variant như "variant_27"
  } catch (err) {
    console.error('Lỗi khi fetch promotions:', err);
    throw err;
  }
}
