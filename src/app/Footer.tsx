import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p className={styles.footerText}>&copy; {new Date().getFullYear()} Robert Mondřík. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
