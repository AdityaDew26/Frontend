import React from 'react';
import './blog.css'; 

const blogPosts = [
  {
    id: 1,
    title: 'Understanding React',
    description:
      'In this blog post, we will explore the fundamentals of React and how to build interactive UIs...',
    image: 'https://tec-sense.com/wp-content/uploads/2024/02/Understanding-React.js.png',
    link: '/blog/understanding-react',
  },
  {
    id: 2,
    title: 'JavaScript ES6 Features',
    description:
      'JavaScript ES6 introduces several new features that make writing JavaScript code easier and more efficient...',
    image: 'https://www.cuelogic.com/wp-content/uploads/2021/06/Advantages-of-JavaScript-ES6-over-ES51.jpg',
    link: '/blog/javascript-es6-features',
  },
  {
    id: 3,
    title: 'CSS Grid Layout',
    description:
      'CSS Grid is a two-dimensional layout system for the web. It allows you to create complex web layouts...',
    image: 'https://i.ytimg.com/vi/68O6eOGAGqA/maxresdefault.jpg',
    link: '/blog/css-grid-layout',
  },
];

function Blog() {
  return (
    <div className="blog-container" id='blog'>
      <h1>Latest Blog Posts</h1>
      <div className="blog-list">
        {blogPosts.map((post) => (
          <div key={post.id} className="blog-item">
            <img
              src={post.image}
              alt={post.title}
              className="blog-image"
            />
            <h2 className="blog-title">{post.title}</h2>
            <p className="blog-description">{post.description}</p>
            <a href={post.link} className="read-more-link">
              Read More
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Blog;
