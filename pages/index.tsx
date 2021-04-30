import React, { FC } from 'react';

import { Hero, FeaturedPosts } from '../components/HomePage';

const HomePage: FC = () => {
  return (
    <>
      <Hero />
      <FeaturedPosts />
    </>
  );
};

export default HomePage;
