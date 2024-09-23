import React from "react";
import { posts } from "../data/posts";

function Blog() {
  return (
    <>
      <div>
        <h1>Blog Page...</h1>
        <ul>
          {posts.map((post) => (
            <>
              <li key={post.id}>{post.title}</li>
              <hr />
            </>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Blog;
