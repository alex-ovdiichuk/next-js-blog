import React, { FC } from 'react';
import Link from 'next/link';

import { Logo } from './Logo';
import styles from './MainNavigation.module.css';

export const MainNavigation: FC = () => {
  return (
    <header className={styles.header}>
      <Link href="/">
        <a>
          <Logo />
        </a>
      </Link>
      <nav>
        <ul>
          <li>
            <Link href="/posts">Posts</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
