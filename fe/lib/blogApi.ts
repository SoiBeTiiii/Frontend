import baseAxios from "./baseAxios";
import BlogProps from "../app/interface/blog";

export default async function fetchBlogs(): Promise<BlogProps[]> {
    const res = await baseAxios.get('/blogs');
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
            author: item.author,
            views_count: item.views_count,
            is_hot: item.is_hot,
            is_new: item.is_new
        } as BlogProps;
    }
    );
    return result;
}

export async function fetchBlogBySlug(slug: string): Promise<BlogProps | null> {
    try {
        const res = await baseAxios.get(`/blogs/${slug}`);
        const data = res.data as BlogProps;
        return data;
    } catch (error) {
        console.error(`Error fetching blog with slug ${slug}:`, error);
        return null;
    }
}


export async function fetchBlogById(id: number): Promise<BlogProps | null> {
    try {
        const res = await baseAxios.get(`/blogs/${id}`);
        const data = res.data as BlogProps;
        return data;
    } catch (error) {
        console.error(`Error fetching blog with id ${id}:`, error);
        return null;
    }
}