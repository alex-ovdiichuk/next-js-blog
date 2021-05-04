import React, { FC } from 'react';
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import Image from 'next/image';

import { PostHeader } from './PostHeader';
import { Post } from '../../../types';
import styles from './PostContent.module.css';

interface PostContentProps {
  post: Post;
}

export const PostContent: FC<PostContentProps> = ({ post }) => {
  const { slug, image, title, content } = post;

  const components = {
    p(props) {
      const { node } = props;

      if (node.children[0].tagName === 'img') {
        const { src, alt } = node.children[0].properties;

        return (
          <div className={styles.image}>
            <Image src={`/images/posts/${slug}/${src}`} alt={alt} width={600} height={300} />
          </div>
        );
      }
      return <p>{props.children}</p>;
    },

    code(code) {
      const { children } = code;

      return (
        // <code>123</code>
        <SyntaxHighlighter language="javascript" style={atomDark}>
          {children}
        </SyntaxHighlighter>
      );
    },
  };

  return (
    <article className={styles.content}>
      <PostHeader title={title} image={`/images/posts/${slug}/${image}`} />
      <ReactMarkdown components={components}>{content}</ReactMarkdown>
    </article>
  );
};
