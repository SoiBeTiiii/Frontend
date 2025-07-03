import styles from '../css/NewsCard.module.css';
import React from 'react';
import NewSectionProps from "../interface/newSection";
import Link from 'next/link';

export default function NewsCard({
  id,
  title,
  slug,
  image,
  description,
  content,
  Category,
  is_active,
  created_at,
  updated_at,
  author,
  views_count,
  is_hot,
  is_new
}: NewSectionProps) {
  return (
    <div className={styles.card}>
      <Link href={`/news/${slug}`} className={styles.imageWrapper}>
        {image && <img src={image} alt={title} />}
      </Link>
      <div className={styles.content}>
        <h3>{title}</h3>
        <p className={styles.description}>{description}</p>
        <div className={styles.meta}>
          <span>{new Date(created_at || '').toLocaleDateString()}</span>
        </div>
      </div>
    </div>
  );
}
// export default function NewsCard({ image, day, month, title, description }: Props) {
//   return (
//     <div className={styles.card}>
//       <div className={styles.imageWrapper}>
//         <img src={image} alt={title} />
//         <div className={styles.date}>
//           <span>{day}</span>
//           <small>{month}</small>
//         </div>
//       </div>
//       <div className={styles.content}>
//         <h3>{title}</h3>
//         <p>{description}</p>
//       </div>
//     </div>
//   );
// }
