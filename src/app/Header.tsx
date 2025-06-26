import Link from 'next/link';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <Link href="/" className={styles.logo}>
          Robert Mondřík
        </Link>
        <ul className={styles.navList}>
          <li>
            <Link href="/blog" className={styles.navItem}>
              Blog
            </Link>
          </li>
          <li>
            <Link href="/resume" className={styles.navItem}>
              Resume
            </Link>
          </li>
          <li>
            <Link href="/contact" className={styles.navItem}>
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
