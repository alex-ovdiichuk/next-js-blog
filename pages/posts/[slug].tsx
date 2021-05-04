import React, { FC } from 'react';
import { GetStaticProps, GetStaticPaths } from 'next';

import { PostContent } from '../../components/Posts';
import { Post } from '../../types';
import { getPostData, getFileNames } from '../../util/postsUtil';

interface PostPageProps {
  post: Post;
}

const PostPage: FC<PostPageProps> = ({ post }) => {
  return <PostContent post={post} />;
};

export default PostPage;

export const getStaticProps: GetStaticProps<PostPageProps> = async (context) => {
  const { slug } = context.params;

  const postData = getPostData(typeof slug === 'string' ? slug : slug[0]);

  return {
    props: {
      post: postData,
    },
    revalidate: 600,
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const slugs = getFileNames().map((fileName) => fileName.slice(0, -3));
  return { paths: slugs.map((slug) => ({ params: { slug } })), fallback: false };
};
