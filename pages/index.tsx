import React, { FC } from 'react';
import { GetStaticProps } from 'next';

import { Hero, FeaturedPosts } from '../components/HomePage';
import { Post } from '../types';
import { getFeaturedPosts } from '../util/postsUtil';

interface HomePageProps {
  posts: Post[];
}

const HomePage: FC<HomePageProps> = ({ posts }) => {
  return (
    <>
      <Hero />
      <FeaturedPosts posts={posts} />
    </>
  );
};

export default HomePage;

export const getStaticProps: GetStaticProps<HomePageProps> = async () => {
  const posts = getFeaturedPosts();

  return {
    props: {
      posts,
    },
    revalidate: 60,
  };
};
