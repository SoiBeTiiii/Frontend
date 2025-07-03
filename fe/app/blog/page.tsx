'use client';
import styles from './Blog.module.css';
import BlogCard from '../components/BlogCard';
import Link from 'next/link';
import React from 'react';
import { useState, useEffect } from 'react';


// const blogData = [
//   {
//     image: '/images/blogs/blog1.webp',
//     title: 'CÓ NÊN SỬ DỤNG MỸ PHẨM CẬN DATE VÀ GẦN HẾT HẠN SỬ DỤNG ???',
//     category: 'Tin tức',
//     excerpt: 'Sản phẩm cận date có nên dùng không? Cùng tìm hiểu ngay!',
//     slug: 'my-pham-can-date',
//   },
//   {
//     image: '/images/blogs/blog2.webp',
//     title: 'Top 5 kem dưỡng ẩm cho da mịn màng tốt nhất hiện nay',
//     category: 'Góc Review',
//     excerpt: 'Danh sách kem dưỡng bán chạy, hiệu quả vượt mong đợi...',
//     slug: 'my-pham-can-date',
//   },
//   {
//     image: '/images/blogs/blog1.webp',
//     title: 'Top sữa rửa mặt dịu nhẹ, không gây khô da cho mùa hè 2025',
//     category: 'Cách chăm sóc da',
//     excerpt: 'Giải pháp làm sạch sâu nhưng vẫn dịu nhẹ và an toàn...',
//     slug: 'my-pham-can-date',
//   },
//   // ... thêm bài khác nếu muốn
// ];


export default function BlogPage() {
  return (
    <div className={styles.container}>
      <nav className={styles.breadcrumb}>Trang chủ &gt; Chuyên mục làm đẹp</nav>
      <h1 className={styles.title}>Chuyên mục làm đẹp</h1>

      <section className={styles.featured}>
        <img src="/images/blogs/blog1.webp" className={styles.featuredImg} alt="Blog chính" />
        <div className={styles.featuredContent}>
          <p className={styles.category}>Tin tức</p>
          <h2 className={styles.featuredTitle}>
            CÓ NÊN SỬ DỤNG MỸ PHẨM CẬN DATE VÀ GẦN HẾT HẠN SỬ DỤNG ???
          </h2>
          <p className={styles.excerpt}>
            Sản phẩm đã sắp hết hạn thì mua làm gì? Thật ra vẫn dùng tốt và không ảnh hưởng nếu bạn biết cách chọn.
          </p>
        </div>
      </section>

      <h2 className={styles.subheading}>DANH MỤC BÀI VIẾT</h2>
      <div className={styles.tabs}>
        <span className={styles.active}>Tất cả</span>
        <span>Tin tức</span>
        <span>Góc Review</span>
        <span>Cách Chăm Sóc Da</span>
        <span>Xu Hướng Trang Điểm</span>
      </div>

      <div className={styles.grid}>
        <BlogCard id={0} title={''} slug={''}/>
      </div>

      <div className={styles.more}>
        <button>XEM TẤT CẢ ➜</button>
      </div>
    </div>
  );
}
