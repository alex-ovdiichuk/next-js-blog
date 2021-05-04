import React, { FC } from 'react';
import Head from 'next/head';

import { ContactForm } from '../components/Contact';

const Contact: FC = () => {
  return (
    <>
      <Head>
        <title>Contact</title>
      </Head>
      <ContactForm />
    </>
  );
};

export default Contact;
