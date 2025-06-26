export interface Category {
  id: number;
  name: string;
  slug: string;
  thumbnail: string;
  is_active: boolean;
  is_featured: boolean;
  children: Category[];
}
