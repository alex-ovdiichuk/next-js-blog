import React, { FC } from 'react';

import { AllPosts } from '../../components/Posts';
import { Post } from '../../types';

const DUMMY_POSTS: Post[] = [
  {
    title: 'Getting Started',
    image: 'getting-started.png',
    excerpt: 'Next JS react framework',
    date: new Date(),
    slug: 'getting-started',
  },
  {
    title: 'Getting Started',
    image: 'getting-started.png',
    excerpt: 'Next JS react framework',
    date: new Date(),
    slug: 'getting-started',
  },
  {
    title: 'Getting Started',
    image: 'getting-started.png',
    excerpt: 'Next JS react framework',
    date: new Date(),
    slug: 'getting-started',
  },
  {
    title: 'Getting Started',
    image: 'getting-started.png',
    excerpt: 'Next JS react framework',
    date: new Date(),
    slug: 'getting-started',
  },
  {
    title: 'Getting Started',
    image: 'getting-started.png',
    excerpt: 'Next JS react framework',
    date: new Date(),
    slug: 'getting-started',
  },
];

const PostsPage: FC = () => {
  return <AllPosts posts={DUMMY_POSTS} />;
};

export default PostsPage;
