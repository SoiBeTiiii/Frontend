'use client';
import { useEffect, useState } from 'react';
import styles from '../css/BannerSlider.module.css';
import Image from 'next/image';
import fetchBanners from '../../lib/bannersApi';
import BannerProps from '../interface/banner';

export default function BannerSlider() {
  const [banners, setBanners] = useState<BannerProps[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    fetchBanners()
      .then((result) => {
        setBanners(result);
      })
      .catch((err) => {
        console.error('Error fetching banners: ', err);
      });
  }, []);

  const handleSelect = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className={styles.sliderWrapper}>
      <div className={styles.sliderTrack}>
        {banners.length > 0 && (
          <Image
            src={`/${banners[currentIndex].image || ''}`}
            alt="Banner"
            width={1200}
            height={400}
            className={styles.bannerImage}
          />
        )}
      </div>

      <div className={styles.dots}>
        {banners.map((_, index) => (
          <div
            key={index}
            className={`${styles.dot} ${currentIndex === index ? styles.active : ''}`}
            onClick={() => handleSelect(index)}
          />
        ))}
      </div>
    </div>
  );
}

