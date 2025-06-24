import { notFound } from 'next/navigation';
import styles from './BlogDetail.module.css';

const blogData = [
  {
    slug: 'my-pham-can-date',
    title: 'CÓ NÊN SỬ DỤNG MỸ PHẨM CẬN DATE VÀ GẦN HẾT HẠN SỬ DỤNG ???',
    image: '/images/blogs/blog1.webp',
    content: `Sản phẩm đã sắp hết hạn thì mua làm gì? Thật ra vẫn dùng tốt và không ảnh hưởng nếu bạn biết cách chọn...`,
  },
  // thêm bài khác nếu cần
];

export default function BlogDetail({ params }: { params: { slug: string } }) {
  const post = blogData.find((item) => item.slug === params.slug);

  if (!post) return notFound();

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{post.title}</h1>
      <img src={post.image} className={styles.image} alt={post.title} />
      <div className={styles.content}>{post.content}</div>
    </div>
  );
}
