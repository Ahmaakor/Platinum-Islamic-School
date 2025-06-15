import styles from './BlogsNews.module.css';
import { posts } from '../../data/blog';
import { Link } from 'react-router-dom';
import placeholder from "../../assets/images/logo/pis-icon-white.png"

function BlogsNews() {

    // const icons = [
    //     "fa-solid fa-calendar-days",
    //     "fa-solid fa-trophy",
    //     "fa-solid fa-people-group"
    // ];

    return (
        <section className={styles.blogsNews}>
            <div className="container" data-aos="fade-up">
                <h2>Latest News</h2>
                <div className={styles.posts}>
                    {posts.map((post, i) => (
                        <div key={i} className={styles.post}>
                            <div className={styles.postImg} >
                                <img
                                    src={post.image}
                                    alt={post.title}
                                    onError={e => { e.target.onerror = null; e.target.src = placeholder; }}
                                />
                            </div>
                            <div className={styles.down} >
                                <h4>{post.title}</h4>
                                <span>
                                    <i className="fa-solid fa-calendar-days"></i> {post.date}
                                </span>
                                <p>{post.excerpt}</p>
                                <Link to="#" className='pri_btn'>Read More</Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default BlogsNews;