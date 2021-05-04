import React, { FC, useState, useEffect, ChangeEvent, SyntheticEvent } from 'react';

import { Notification } from '../ui';
import { RequestStatus } from '../../types';
import styles from './ContactForm.module.css';

export const ContactForm: FC = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [requestStatus, setRequestStatus] = useState<RequestStatus>(null);

  useEffect(() => {
    if (requestStatus === 'error' || requestStatus === 'success') {
      const timer = setTimeout(() => {
        setRequestStatus(null);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [requestStatus]);

  const emailHandler = (e: ChangeEvent<HTMLInputElement>): void => setEmail(e.target.value);
  const nameHandler = (e: ChangeEvent<HTMLInputElement>): void => setName(e.target.value);
  const messageHandler = (e: ChangeEvent<HTMLTextAreaElement>): void => setMessage(e.target.value);

  const submitHandler = async (e: SyntheticEvent): Promise<void> => {
    e.preventDefault();

    setRequestStatus('pending');
    try {
      const res = await fetch('/api/contact', {
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

      const data = await res.json();
      if (!res.ok) throw new Error(data.message || 'Something went wrong');
      else {
        setRequestStatus('success');
        setEmail('');
        setMessage('');
        setName('');
      }
    } catch (err) {
      setRequestStatus('error');
    }
  };

  let notification: { title: string; message: string; status: RequestStatus } | null = null;

  if (requestStatus === 'pending') {
    notification = {
      status: 'pending',
      title: 'Sending message...',
      message: 'Your message is sending',
    };
  }

  if (requestStatus === 'success') {
    notification = {
      status: 'success',
      title: 'Success',
      message: 'Message sent succesfully',
    };
  }

  if (requestStatus === 'error') {
    notification = {
      status: 'error',
      title: 'Error',
      message: 'Something went wrong',
    };
  }

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
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
    </section>
  );
};
