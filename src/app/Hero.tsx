import Image from 'next/image';
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
          <a href="/blog" className={styles.linkButton}>Read My Blog</a>
          <a href="/resume" className={styles.linkButtonSecondary}>View My Resume</a>
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