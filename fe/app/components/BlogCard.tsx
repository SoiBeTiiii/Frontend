import styles from '../css/BlogCard.module.css';
import Link from 'next/link';

interface BlogCardProps {
  image: string;
  title: string;
  excerpt: string;
  category: string;
  slug: string; // ← thêm slug để định danh bài viết
}

export default function BlogCard({ image, title, excerpt, category, slug }: BlogCardProps) {
  return (
    <Link href={`/blog/${slug}`} className={styles.card}>
      <img src={image} alt={title} className={styles.image} />
      <span className={styles.category}>{category}</span>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.excerpt}>{excerpt}</p>
    </Link>
  );
}
