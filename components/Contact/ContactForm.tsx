import React, { FC, useState, ChangeEvent, SyntheticEvent } from 'react';

import styles from './ContactForm.module.css';

export const ContactForm: FC = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  const emailHandler = (e: ChangeEvent<HTMLInputElement>): void => setEmail(e.target.value);
  const nameHandler = (e: ChangeEvent<HTMLInputElement>): void => setName(e.target.value);
  const messageHandler = (e: ChangeEvent<HTMLTextAreaElement>): void => setMessage(e.target.value);

  const submitHandler = (e: SyntheticEvent): void => {
    e.preventDefault();

    fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        name,
        message,
      }),
    });
  };

  return (
    <section className={styles.contact}>
      <h1>How can I help you?</h1>
      <form className={styles.form} onSubmit={submitHandler}>
        <div className={styles.controls}>
          <div className={styles.control}>
            <label htmlFor="email">Your email:</label>
            <input type="email" id="email" value={email} onChange={emailHandler} required />
          </div>
          <div className={styles.control}>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" value={name} onChange={nameHandler} required />
          </div>
        </div>
        <div className={styles.control}>
          <label htmlFor="message">Your message:</label>
          <textarea
            name="message"
            id="message"
            rows={5}
            value={message}
            onChange={messageHandler}
          />
        </div>

        <div className={styles.actions}>
          <button>Send Message</button>
        </div>
      </form>
    </section>
  );
};
