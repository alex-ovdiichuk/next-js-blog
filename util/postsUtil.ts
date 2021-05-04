import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

import { Post } from '../types';

const postsDirectory = path.join(process.cwd(), 'data', 'posts');

export const getFileNames = (): string[] => {
  return fs.readdirSync(postsDirectory);
};

export const getPostData = (postIdentifier: string): Post => {
  const fileName = postIdentifier.slice(-3) === '.md' ? postIdentifier : postIdentifier + '.md';
  const filePath = path.join(postsDirectory, fileName);
  const fileContent = fs.readFileSync(filePath, 'utf-8');
  const { data, content } = matter(fileContent);

  return {
    title: data.title,
    image: data.image,
    excerpt: data.excerpt,
    date: data.date,
    slug: fileName.slice(0, -3),
    isFeatured: data.isFeatured,
    content,
  };
};

export const getAllPosts = (): Post[] => {
  const postFiles = getFileNames();
  return postFiles
    .map((post) => getPostData(post))
    .sort((postA, postB) => (postA.date > postB.date ? -1 : 1));
};

export const getFeaturedPosts = (): Post[] => {
  return getAllPosts().filter((post) => post.isFeatured);
};
