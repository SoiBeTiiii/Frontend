import baseAxios from "./baseAxios";

export default async function searchProducts(keyword: string) {
  try {
    const response = await baseAxios.get("search", {
      params: { keyword },
    });

    const data = response.data as { data: any[] };
    return data.data;
  } catch (error) {
    console.error("Lỗi khi tìm kiếm sản phẩm:", error);
    return [];
  }
}
