'use client';
import { useState, useEffect } from 'react';
import styles from '../css/IntroSlider.module.css';
import Image from 'next/image';
import fetchSliders from '../../lib/introSlidersApi';
import { Slider } from '../interface/introSlider';
// import IntroSliderProps from '../interface/introSlider';

export default function Sliders() {
  const [sliders, setSliders] = useState<Slider[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    fetchSliders()
      .then((result) => {
        if (Array.isArray(result)) {
          setSliders(result);
        } else {
          setSliders([]);
          console.error('fetchSliders did not return an array:', result);
        }
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
              src={`/${sliders[currentIndex].images?.[0]?.image_url || ''}`}
              alt="Intro Slider2q"
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
              <Image src={`{slider.images?.[0]?.image_url || '/images/default-thumb.webp'}`} alt={`thumb-${index}`} width={100} height={70} />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}


// export function IntroSliders() {
//   const [introsliders, setSliders] = useState<IntroSliderProps[]>([]);
//   const [currentIndex, setCurrentIndex] = useState(0);

//   useEffect(() => {
//     fetchIntroSilders()
//       .then((introslider) => {
//         setSliders(introslider);
//       })
//       .catch((err) => {
//         console.error('Error fetching introsliders: ', err);
//       });
//   }, []);

//   const handleSelect = (index: number) => {
//     setCurrentIndex(index);
//   };

//   return (
//     <div className={styles.sliderWrapper}>
//       <div className={styles.sliderTrack}>
//         {introsliders.length > 0 && (
//           <Image
//             src={`/${introsliders[currentIndex].image || ''}`}
//             alt="Intro Slideeeeeeeeeeeeeeeeeeeer"
//             width={1200}
//             height={400}
//             className={styles.bannerImage}
//           />
//         )}
//       </div>

//       <div className={styles.dots}>
//         {introsliders.map((_, index) => (
//           <div
//             key={index}
//             className={`${styles.dot} ${currentIndex === index ? styles.active : ''}`}
//             onClick={() => handleSelect(index)}
//           />
//         ))}
//       </div>
//     </div>
//   );
// }



