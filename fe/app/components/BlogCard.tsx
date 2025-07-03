import styles from '../css/BlogCard.module.css';
import Link from 'next/link';
import React from 'react';
import BlogProps from '../interface/blog';

export default function BlogCard
({ id, title, slug, image, description, Category, created_at, author, views_count }: BlogProps) {
  return (
    <div className={styles.card}>
      <Link href={`/blog/${slug}`} className={styles.imageWrapper}>
        {image && <img src={image} alt={title} />}
      </Link>
      <div className={styles.content}>
        <h3>{title}</h3>
        {Category && <p className={styles.category}>{typeof Category === 'string' ? Category : Category.name}</p>}
        <p className={styles.description}>{description}</p>
        <div className={styles.meta}>
          <span>{author}</span>
          <span>{new Date(created_at || '').toLocaleDateString()}</span>
          <span>{views_count} views</span>
        </div>
      </div>
    </div>
  );
}
