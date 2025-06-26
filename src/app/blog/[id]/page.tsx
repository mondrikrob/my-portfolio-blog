import styles from './post.module.css';

export default function BlogPost({ params }: { params: { id: string } }) {
  const postId = parseInt(params.id);

  const postContent: { [key: number]: { title: string; category: string; content: string } } = {
    1: {
      title: 'My First Travel Adventure',
      category: 'Travel',
      content: 'This is the full content of my first travel adventure. It was an incredible journey filled with amazing sights, sounds, and experiences. I learned so much about myself and the world around me.',
    },
    2: {
      title: 'Review: The Great Gatsby',
      category: 'Book Review',
      content: 'A classic novel that explores themes of wealth, love, and the American Dream. In this post, I delve into the characters, symbolism, and enduring legacy of this literary masterpiece.',
    },
    3: {
      title: '5 Tips for Effective Remote Work',
      category: 'Work Tips',
      content: 'Here are five essential tips to boost your productivity and maintain a healthy work-life balance while working remotely. These strategies have helped me stay focused and motivated.',
    },
  };

  const post = postContent[postId];

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <article>
      <header className={styles.postHeader}>
        <h1 className={styles.postTitle}>{post.title}</h1>
        <p className={styles.postMeta}>Category: {post.category}</p>
      </header>
      <div className={styles.postContent}>
        <p>{post.content}</p>
      </div>
    </article>
  );
}
