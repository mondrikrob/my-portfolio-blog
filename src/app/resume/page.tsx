import styles from './resume.module.css';

export default function Resume() {
  return (
    <div className={styles.resume}>
      <h1 className={styles.resumeTitle}>My Resume</h1>

      <section>
        <h2 className={styles.sectionTitle}>Education</h2>
        <p><strong>University of Example</strong> - Bachelor of Science in Computer Science, 2020</p>
      </section>

      <section>
        <h2 className={styles.sectionTitle}>Work Experience</h2>
        <p><strong>Tech Company Inc.</strong> - Software Engineer, 2020 - Present</p>
        <ul>
          <li>Developed and maintained web applications using React, Node.js, and TypeScript.</li>
          <li>Collaborated with cross-functional teams to deliver high-quality software.</li>
          <li>Implemented new features and fixed bugs in a large-scale codebase.</li>
        </ul>
      </section>

      <section>
        <h2 className={styles.sectionTitle}>Skills</h2>
        <p className={styles.resumeParagraph}><strong>Programming Languages:</strong> JavaScript, TypeScript, Python, HTML, CSS</p>
        <p className={styles.resumeParagraph}><strong>Frameworks & Libraries:</strong> React, Node.js, Next.js, Express</p>
        <p className={styles.resumeParagraph}><strong>Tools:</strong> Git, Docker, Webpack, Babel</p>
      </section>
    </div>
  );
}
