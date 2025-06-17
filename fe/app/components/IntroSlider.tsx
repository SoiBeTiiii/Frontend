'use client';
import { useState } from 'react';
import styles from '../css/IntroSlider.module.css';
import Image from 'next/image';

const villaImages = [
  '/images/slide1.webp',
  '/images/slide2.webp',
  '/images/slide3.webp',
  
];

export default function VillaSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleSelect = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.left}>
        <h2>WELCOME TO</h2>
        <h1>EGOMALL</h1>
        <p>
          Hệ Thống Victory Villa tọa lạc tại những vị trí vàng gần biển Vũng Tàu. Victory Villa là hệ thống biệt thự nghỉ dưỡng cao cấp dành cho gia đình, nhóm bạn và đoàn khách yêu thích không gian riêng tư, thoáng đãng và đầy đủ tiện nghi.
        </p>
        <button className={styles.button}>Xem chi tiết →</button>
      </div>

      <div className={styles.right}>
        <div className={styles.imageWrapper}>
          <Image
          key={currentIndex}
            src={villaImages[currentIndex]}
            alt="Villa"
            width={700}
            height={500}
            className={styles.mainImage}
          />
        </div>

        <div className={styles.thumbnailRow}>
          {villaImages.map((img, index) => (
            <button
              key={index}
              className={`${styles.thumb} ${currentIndex === index ? styles.active : ''}`}
              onClick={() => handleSelect(index)}
            >
              <Image src={img} alt={`thumb-${index}`} width={100} height={70} />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
