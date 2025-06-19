// components/BrandSlider.tsx
'use client'
import React, { useState } from 'react';
import styles from '../css/BrandSlider.module.css';
import Image from 'next/image';

const brands = [
  '/images/brands/Beiflogo.webp',
  '/images/brands/OHUIlogo.webp',
  '/images/brands/Sumlogo.webp',
  '/images/brands/Beiflogo.webp',
  '/images/brands/Sulwhasoo.webp',
  '/images/brands/PhysiogelLogo.webp',
  '/images/brands/CNPlogo.webp',
    '/images/brands/Beiflogo.webp',

];

const ITEMS_PER_SLIDE = 7;

export default function BrandSlider() {
  const [index, setIndex] = useState(0);

  const next = () => {
    setIndex((prev) =>
      prev + ITEMS_PER_SLIDE >= brands.length ? 0 : prev + ITEMS_PER_SLIDE
    );
  };

  const prev = () => {
    setIndex((prev) =>
      prev - ITEMS_PER_SLIDE < 0 ? Math.max(0, brands.length - ITEMS_PER_SLIDE) : prev - ITEMS_PER_SLIDE
    );
  };

  const visibleBrands = brands.slice(index, index + ITEMS_PER_SLIDE);

  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>THƯƠNG HIỆU NỔI BẬT</h2>
      <div className={styles.sliderWrapper}>
        <button className={styles.arrow} onClick={prev}>←</button>
        <div className={styles.slider}>
          {visibleBrands.map((src, i) => (
            <div className={styles.brand} key={i}>
              <Image src={src} alt={`Brand ${i}`} fill objectFit="contain" />
            </div>
          ))}
        </div>
        <button className={styles.arrow} onClick={next}>→</button>
      </div>
    </div>
  );
}
