'use client';
import React, { useEffect, useRef, useState } from 'react';
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

const ITEMS_PER_SLIDE = 5;
const INTERVAL = 5000;

export default function BrandSlider() {
  const [index, setIndex] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const totalSlides = Math.ceil(brands.length / ITEMS_PER_SLIDE);

  useEffect(() => {
  intervalRef.current = setInterval(() => {
    setIndex((prev) => {
      const nextIndex = prev + 1;
      return nextIndex >= totalSlides ? 0 : nextIndex;
    });
  }, INTERVAL);

  return () => clearInterval(intervalRef.current!);
}, [totalSlides]);

  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>THƯƠNG HIỆU NỔI BẬT</h2>
      <div className={styles.sliderWrapper}>
        <div className={styles.sliderContainer}>
          <div
            className={styles.slider}
            style={{
              transform: `translateX(-${index * 100}%)`,
            }}
          >
            {Array.from({ length: totalSlides }).map((_, slideIndex) => (
              <div className={styles.slide} key={slideIndex}>
                {brands
                  .slice(
                    slideIndex * ITEMS_PER_SLIDE,
                    slideIndex * ITEMS_PER_SLIDE + ITEMS_PER_SLIDE
                  )
                  .map((src, i) => (
                    <div className={styles.brand} key={i}>
                      <Image src={src} alt={`Brand ${i}`} fill objectFit="contain" />
                    </div>
                  ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
