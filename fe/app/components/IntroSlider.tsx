'use client';
import { useState, useEffect } from 'react';
import styles from '../css/IntroSlider.module.css';
import Image from 'next/image';
import fetchIntroSliders from '../../lib/introSlidersApi';
import IntroSliderProps from '../interface/introSlider';

export default function IntroSliders() {
  const [sliders, setSliders] = useState<IntroSliderProps[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    fetchIntroSliders()
      .then((result) => {
        setSliders(result);
      })
      .catch((err) => {
        console.error('không kấy được banners: ', err);
      });
  }, []);

  const handleSelect = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.left}>
        <h2>WELCOME TO</h2>
        <h1>EGOMALL</h1>
        <p>{sliders[currentIndex]?.description}</p>
        <button className={styles.button}>Xem chi tiết →</button>
      </div>

      <div className={styles.right}>
        {sliders.length > 0 && (
          <div className={styles.imageWrapper}>
            <Image
              src={`/${sliders[currentIndex].image || ''}`}
              alt="Intro Slider"
              width={700}
              height={500}
              className={styles.mainImage}
            />
          </div>
        )}

        <div className={styles.thumbnailRow}>
          {sliders.map((slider, index) => (
            <button
              key={slider.id}
              className={`${styles.thumb} ${currentIndex === index ? styles.active : ''}`}
              onClick={() => handleSelect(index)}
            >
              <Image src={slider.image || '/images/default-thumb.webp'} alt={`thumb-${index}`} width={100} height={70} />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}


