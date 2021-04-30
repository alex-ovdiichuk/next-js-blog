import React, { FC } from 'react';
import Image from 'next/image';

import styles from './Hero.module.css';

export const Hero: FC = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.image}>
        <Image src="/images/raccoon.jpg" alt="Avatar image" width={300} height={300} />
      </div>
      <h1>Hi, i&apos;m Alexandr</h1>
      <p>Blog about javascript development</p>
    </section>
  );
};
