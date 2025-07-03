import baseAxios from "./baseAxios";
import BrandProps from "@/app/interface/brand";

export default async function fetchBrands(): Promise<BrandProps[]> {
    const res = await baseAxios.get('/brands');
    const data = res.data as { data: any[] };
    const raw = data.data;
    const result = raw.map((item) => {
        return {
            id: item.id,
            name: item.name,
            slug: item.slug,
            image: item.image,
            description: item.description,
            is_active: item.is_active,
            created_at: item.created_at,
            updated_at: item.updated_at,
            link: item.link
        } as BrandProps;
    });
    return result;
}