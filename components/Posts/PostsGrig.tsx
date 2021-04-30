import React, { FC } from 'react';

import { PostItem } from './PostItem';
import { Post } from '../../types';
import styles from './PostsGrig.module.css';

interface PostsGridProps {
  posts: Post[];
}

export const PostsGrig: FC<PostsGridProps> = ({ posts }) => {
  return (
    <ul className={styles.grid}>
      {posts.map((post) => (
        <PostItem key={post.slug} post={post} />
      ))}
    </ul>
  );
};
