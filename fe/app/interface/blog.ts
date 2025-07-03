import { Category } from './Category';
export default interface BlogProps {
    id: number;
    title: string;
    slug: string;   
    image?: string;
    description?: string;
    content?: string;
    Category?: string | Category;
    is_active?: number;
    created_at?: string;
    updated_at?: string;
    author?: string;
    views_count?: number;
    is_hot?: boolean;
    is_new?: boolean;
}