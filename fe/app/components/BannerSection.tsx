'use client';
import styles from '../css/BannerSection.module.css';
import Image from 'next/image';

const banners = [
  '/images/banners/banner1.webp',
  '/images/banners/banner2.webp',
  '/images/banners/banner3.webp',
];

export default function BannerSection() {
  return (
    <section className={styles.wrapper}>
      {banners.map((src, index) => (
        <div className={styles.banner} key={index}>
          <Image src={src} alt={`Banner ${index + 1}`} fill objectFit="cover" />
        </div>
      ))}
    </section>
  );
}
