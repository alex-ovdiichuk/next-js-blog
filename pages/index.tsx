import React, { FC } from 'react';

import { Hero, FeaturedPosts } from '../components/HomePage';
import { Post } from '../types';

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

const HomePage: FC = () => {
  return (
    <>
      <Hero />
      <FeaturedPosts posts={DUMMY_POSTS} />
    </>
  );
};

export default HomePage;
