"use client";

import Image from "next/image";
import { useState, useEffect } from 'react';
import styles from "../css/Slider.module.css";

const images = [
  'images/slide1.webp',
  'images/slide2.webp',
  'images/slide3.webp',
];

export default function Slider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000); // đổi ảnh mỗi 4s

    return () => clearInterval(interval);
  }, []);

  const handleThumbnailClick = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className={styles.slider}>
      <img
        src={images[currentIndex]}
        alt="main"
        className={styles.mainImage}
      />
      <div className={styles.overlay}>
        <h2 className={styles.title}>VELIT DOLOR</h2>
        <p className={styles.description}>
          qui laboris. magna laborum... eu voluptate. laborum. nulla. ex
          adipiscing. laborum. nostrud. Ut quis. dolore nulla. id et. enim
          irure. fugiat do. culpa Sed. cupidatattempor. quis do.
        </p>
        <button className={styles.button}>
          XEM CHI TIẾT <span>→</span>
        </button>
      </div>
      <div className={styles.thumbnails}>
        {images.map((img, idx) => (
          <img
            key={idx}
            src={img}
            className={`${styles.thumbnail} ${
              currentIndex === idx ? styles.active : ''
            }`}
            onClick={() => handleThumbnailClick(idx)}
            alt={`thumb-${idx}`}
          />
        ))}
      </div>
    </div>
  );
}