import Link from 'next/link';
import Image from 'next/image'
import styles from './footer.module.scss';

function Footer() {
  return(
    <div className={styles.footer}>
      <span>Copyright(c) VironIT 2010 - 2021</span>
      <div className={styles.links}>
        <Link href="/reports">Главная</Link>
        <Link href="http://vironit.timesummary.com/tour.php">Описание</Link>
        <Link href="http://vironit.timesummary.com/pricing.php">Стоимость</Link>
        <Link href="http://vironit.timesummary.com/contacts.php">Контакты</Link>
      </div>
      <div className={styles.links}>
        <Link href="http://vironit.timesummary.com/privacy_policy.php">Безопасность</Link>
        <Link href="http://vironit.timesummary.com/terms_of_use.php">Условия использования</Link>
      </div>
      <div className={styles.logo}>
        <Image 
          src='/vironit_ws.png'
          alt='logo'
          width={250}
          height={60}
        />
      </div>
    </div>
  )
};

export default Footer;