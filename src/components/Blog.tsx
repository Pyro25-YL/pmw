import React from 'react';
import { BLOG_POSTS } from '../data';

const Blog: React.FC = () => (
  <section id="blog">
    <div className="container">
      <div className="section-header reveal">
        <span className="badge">📝 Blog</span>
        <h2>Insight <span className="grad-text">Teknologi</span></h2>
        <p>Artikel terbaru seputar AI, transformasi digital, dan tren teknologi</p>
      </div>
      <div className="blog-grid">
        {BLOG_POSTS.map((post) => (
          <div
            className="blog-card reveal"
            key={post.title}
            style={post.delay ? { transitionDelay: post.delay } : undefined}
          >
            <div className="blog-thumb" style={{ background: post.gradient }}>
              {post.icon}
            </div>
            <div className="blog-body">
              <div className="blog-cat" style={{ color: post.categoryColor }}>
                {post.category}
              </div>
              <div className="blog-title">{post.title}</div>
              <div className="blog-meta">{post.meta}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Blog;
