import Link from 'next/link';
import styles from './blog.module.css';

export default function Blog() {
  const posts = [
    { id: 1, title: 'My First Travel Adventure', excerpt: 'This is a short excerpt of my first travel adventure. It was an amazing experience that I will never forget.&apos; },
    { id: 2, title: 'Review: The Great Gatsby', excerpt: 'A classic novel that explores themes of wealth, love, and the American Dream. Here are my thoughts on this timeless piece of literature.' },
    { id: 3, title: '5 Tips for Effective Remote Work', excerpt: 'Here are five essential tips to boost your productivity and maintain a healthy work-life balance while working remotely.&apos; },
  ];

  return (
    <div>
      <h1>Blog</h1>
      <ul className={styles.blogList}>
        {posts.map((post) => (
          <li key={post.id} className={styles.postItem}>
            <h2 className={styles.postTitle}>
              <Link href={`/blog/${post.id}`} className={styles.postLink}>{post.title}</Link>
            </h2>
            <p className={styles.postExcerpt}>{post.excerpt}</p>
            <Link href={`/blog/${post.id}`} className={styles.readMoreLink}>
              Read More
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
