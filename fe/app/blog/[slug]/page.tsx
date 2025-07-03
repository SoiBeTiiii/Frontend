// import { notFound } from 'next/navigation';
// import styles from './BlogDetail.module.css';

// const blogData = [
//   {
//     slug: 'my-pham-can-date',
//     title: 'CÓ NÊN SỬ DỤNG MỸ PHẨM CẬN DATE VÀ GẦN HẾT HẠN SỬ DỤNG ???',
//     image: '/images/blogs/blog1.webp',
//     content: `Sản phẩm đã sắp hết hạn thì mua làm gì? Thật ra vẫn dùng tốt và không ảnh hưởng nếu bạn biết cách chọn...`,
//   },
//   // thêm bài khác nếu cần
// ];

// export default function BlogDetail({ params }: { params: { slug: string } }) {
//   const post = blogData.find((item) => item.slug === params.slug);

//   if (!post) return notFound();

//   return (
//     <div className={styles.container}>
//       <h1 className={styles.title}>{post.title}</h1>
//       <img src={post.image} className={styles.image} alt={post.title} />
//       <div className={styles.content}>{post.content}</div>
//     </div>
//   );
// }

import { notFound } from 'next/navigation';
import styles from './BlogDetail.module.css';
import BlogCard from '../../components/BlogCard';
import BlogProps from '../../interface/blog';
import { Metadata } from 'next';
import React from 'react';
import fetchBlogs from '@/lib/blogApi';
import { fetchBlogBySlug } from '@/lib/blogApi';

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const blog = await fetchBlogBySlug(params.slug);
  if (!blog) {
    return {
      title: 'Blog Not Found',
      description: 'The blog you are looking for does not exist.',
    };
  }
  return {
    title: blog.title,
    description: blog.description || 'Read more about this blog.',
  };
}

export default async function BlogDetail({ params }: { params: { slug: string } }) {
  const blog = await fetchBlogBySlug(params.slug);
  if (!blog) return notFound();

  return (
    <div className={styles.container}>
      <nav className={styles.breadcrumb}>Trang chủ &gt; Chuyên mục làm đẹp</nav>
      <h1 className={styles.title}>{blog.title}</h1>
      <BlogCard {...blog} />
      <div className={styles.content}>{blog.content}</div>
    </div>
  );
}


