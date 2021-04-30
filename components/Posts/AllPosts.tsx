import React, { FC } from 'react';

import styles from './AllPosts.module.css';
import { Post } from '../../types';
import { PostsGrig } from './PostsGrig';

interface AllPostsProps {
  posts: Post[];
}

export const AllPosts: FC<AllPostsProps> = ({ posts }) => {
  return (
    <section className={styles.posts}>
      <h1>All Posts</h1>
      <PostsGrig posts={posts} />
    </section>
  );
};
