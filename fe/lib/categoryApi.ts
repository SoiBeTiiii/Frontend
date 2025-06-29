import baseAxios from "../lib/baseAxios";
import { Category } from "../app/interface/Category";

export async function fetchCategories(): Promise<Category[]> {
  const res = await baseAxios.get<{ data: Category[] }>("/categories");
  return res.data.data; 
}
