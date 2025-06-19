'use client';

import { useEffect, useRef, useState } from 'react';
import styles from '../css/BannerSlider.module.css';

const banners = [
  {
    image: 'images/slide1.webp',
    alt: 'Sách hay giá hời',
  },
  {
    image: 'images/slide2.webp',
    alt: 'Chăm sóc ô tô',
  },
];

export default function BannerSlider() {
  const [index, setIndex] = useState(0);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    timeoutRef.current = setTimeout(() => {
      setIndex((prev) => (prev + 1) % banners.length);
    }, 5000);

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [index]);

  return (
    <div className={styles.sliderWrapper}>
      <div
        className={styles.sliderTrack}
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {banners.map((b, i) => (
          <div key={i} className={styles.slide}>
            <img src={b.image} alt={b.alt} className={styles.bannerImage} />
          </div>
        ))}
      </div>

      <div className={styles.dots}>
        {banners.map((_, i) => (
          <div
            key={i}
            className={`${styles.dot} ${i === index ? styles.active : ''}`}
            onClick={() => setIndex(i)}
          />
        ))}
      </div>
    </div>
  );
}
