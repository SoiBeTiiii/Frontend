import { Category } from "../app/interface/Category";

export async function fetchCategories(): Promise<Category[]> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API}categories`, {
    cache: 'no-store',
  });

  if (!res.ok) {
    throw new Error("Failed to fetch categories");
  }

  const json = await res.json();
  return json.data; // ✅ vì response có dạng { data: [...] }
}
