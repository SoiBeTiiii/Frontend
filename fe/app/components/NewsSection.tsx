import NewsCard from './NewsCard';
import styles from '../css/NewsSection.module.css';

const news = [
  {
    image: '/images/prop.webp',
    day: '07',
    month: 'THG 06',
    title: 'Thuê Villa vũng tàu giá rẻ ở đâu ? -77-78',
    description: 'Biển xanh, cát trắng, nắng vàng, một mùa hè sôi động nữa lại về và không có lý do gì chúng ta lại không lên kế hoạch du lịch Vũng Tàu ngay từ bây...',
  },
  // Lặp lại để có 3-4 tin
  {
    image: '/images/prop.webp',
    day: '07',
    month: 'THG 06',
    title: 'Thuê Villa vũng tàu giá rẻ ở đâu ? -77-78',
    description: 'Biển xanh, cát trắng, nắng vàng, một mùa hè sôi động nữa lại về và không có lý do gì chúng ta lại không lên kế hoạch du lịch Vũng Tàu ngay từ bây...',
  },
  {
    image: '/images/prop.webp',
    day: '07',
    month: 'THG 06',
    title: 'Thuê Villa vũng tàu giá rẻ ở đâu ? -77-78',
    description: 'Biển xanh, cát trắng, nắng vàng, một mùa hè sôi động nữa lại về và không có lý do gì chúng ta lại không lên kế hoạch du lịch Vũng Tàu ngay từ bây...',
  },
  {
    image: '/images/prop.webp',
    day: '07',
    month: 'THG 06',
    title: 'Thuê Villa vũng tàu giá rẻ ở đâu ? -77-78',
    description: 'Biển xanh, cát trắng, nắng vàng, một mùa hè sôi động nữa lại về và không có lý do gì chúng ta lại không lên kế hoạch du lịch Vũng Tàu ngay từ bây...',
  }
];

export default function NewsSection() {
  return (
    <section className={styles.section}>
      <h2 className={styles.title}>TIN TỨC LÀM ĐẸP</h2>
      <div className={styles.grid}>
        {news.map((n, i) => (
          <NewsCard key={i} {...n} />
        ))}
      </div>
      <button className={styles.button}>Xem thêm tin tức khác →</button>
    </section>
  );
}
