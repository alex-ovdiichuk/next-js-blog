import React, { FC } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import { Post } from '../../types';
import styles from './PostItem.module.css';

interface PostItemProps {
  post: Post;
}

export const PostItem: FC<PostItemProps> = ({ post }) => {
  const { title, image, excerpt, date, slug } = post;

  const formatDate = (date: Date): string => {
    return new Date(date).toLocaleDateString('en-US', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    });
  };

  return (
    <li className={styles.post}>
      <Link href={`/posts/${slug}`}>
        <a>
          <div className={styles.image}>
            <Image
              src={`/images/posts/${slug}/${image}`}
              alt={title}
              width={300}
              height={200}
              layout="responsive"
            />
          </div>
          <div className={styles.content}>
            <h3>{title}</h3>
            <time>{formatDate(date)}</time>
            <p>{excerpt}</p>
          </div>
        </a>
      </Link>
    </li>
  );
};
