import React, { FC } from 'react';

import { PostsGrig } from '../Posts';
import { Post } from '../../types';
import styles from './FeaturedPosts.module.css';

interface FeaturedPostsProps {
  posts: Post[];
}

export const FeaturedPosts: FC<FeaturedPostsProps> = ({ posts }) => {
  return (
    <section className={styles.latest}>
      <h2>Featured posts</h2>
      <PostsGrig posts={posts} />
    </section>
  );
};
