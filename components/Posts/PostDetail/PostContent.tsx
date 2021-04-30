import React, { FC } from 'react';

import { PostHeader } from './PostHeader';
import { Post } from '../../../types';
import styles from './PostContent.module.css';

const DUMMY_POST: Post = {
  title: 'Getting Started',
  image: 'getting-started.png',
  excerpt: 'Next JS react framework',
  date: new Date(),
  slug: 'getting-started',
  content: '#This is the first post',
};

export const PostContent: FC = () => {
  const imagePath = `/images/posts/${DUMMY_POST.slug}/${DUMMY_POST.image}`;

  return (
    <article className={styles.content}>
      <PostHeader title={DUMMY_POST.title} image={imagePath} />
      {DUMMY_POST.content}
    </article>
  );
};
