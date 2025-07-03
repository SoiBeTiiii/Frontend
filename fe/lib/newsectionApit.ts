import baseAxios from "./baseAxios";
import NewSectionProps from "../app/interface/newSection";

export default async function fetchNewSection(): Promise<NewSectionProps[]> {
  const res = await baseAxios.get('/newsections');
  const data = res.data as { data: any[] };
  const raw = data.data;
  const result = raw.map((item) => {
    return {
      id: item.id,
      title: item.title,
      slug: item.slug,
      image: item.image,
      description: item.description,
      content: item.content,
      Category: item.Category,
      is_active: item.is_active,
      created_at: item.created_at,
      updated_at: item.updated_at,
    } as NewSectionProps;
  });
  return result;
}