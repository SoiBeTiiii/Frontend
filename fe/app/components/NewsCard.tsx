import styles from '../css/NewsCard.module.css';

type Props = {
  image: string;
  day: string;
  month: string;
  title: string;
  description: string;
};

export default function NewsCard({ image, day, month, title, description }: Props) {
  return (
    <div className={styles.card}>
      <div className={styles.imageWrapper}>
        <img src={image} alt={title} />
        <div className={styles.date}>
          <span>{day}</span>
          <small>{month}</small>
        </div>
      </div>
      <div className={styles.content}>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}
