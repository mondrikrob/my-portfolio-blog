import Image from 'next/image';
import Link from 'next/link';
import styles from './Hero.module.css';

const Hero = () => {
  return (
    <div className={styles.hero}>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>Hi, I'm Robert Mondřík</h1>
        <p className={styles.description}>
          During my life i have found passion in data, travelling and sports. I am trying to combine these hobbies to make my life as interesting as possible.
        </p>
        <div className={styles.links}>
          <Link href="/blog" className={styles.linkButton}>Read My Blog</Link>
          <Link href="/resume" className={styles.linkButtonSecondary}>View My Resume</Link>
        </div>
      </div>
      <div className={styles.imageContainer}>
        <Image
          src="/my-face.jpg" // Replaced with your actual profile picture
          alt="Robert Mondřík"
          width={200}
          height={200}
          className={styles.profileImage}
        />
      </div>
    </div>
  );
};

export default Hero;