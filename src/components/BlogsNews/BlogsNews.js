import styles from './BlogsNews.module.css';
import { posts } from '../../data/blog';

function BlogsNews() {

    // Example icons for each post (could be improved with real images or icons)
    const icons = [
        "fa-solid fa-calendar-days",
        "fa-solid fa-trophy",
        "fa-solid fa-people-group"
    ];

    return (
        <section className={styles.blogsNews} data-aos="fade-up">
            <div className="container">
                <h2>Latest News</h2>
                <div className={styles.posts}>
                    {posts.map((post, i) => (
                        <div key={i} className={styles.post}>
                            <div className={styles.postImg} >
                                <img
                                    src={post.image}
                                    alt={post.title}
                                />
                            </div>
                            <div className={styles.down} >
                                <h4>{post.title}</h4>
                                <span>
                                    <i className="fa-solid fa-calendar-days"></i> {post.date}
                                </span>
                                <p>{post.excerpt}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default BlogsNews;