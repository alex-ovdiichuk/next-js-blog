import type { NextApiRequest, NextApiResponse } from 'next';
import { MongoClient } from 'mongodb';

export default async (req: NextApiRequest, res: NextApiResponse): Promise<void> => {
  if (req.method === 'POST') {
    const { email, name, message } = req.body;
    if (!email || !email.includes('@') || !name.trim() || !message.trim()) {
      res.status(402).json({ message: 'Invalid input' });
      return;
    }

    const newMessage = { email, name, message };

    let client: MongoClient;
    try {
      const { mongodb_user, mongodb_password, mongodb_cluster, mongodb_db } = process.env;
      const url = `mongodb+srv://${mongodb_user}:${mongodb_password}@${mongodb_cluster}/${mongodb_db}?retryWrites=true&w=majority`;

      client = await MongoClient.connect(url);

      const db = client.db();

      await db.collection('messages').insertOne(newMessage);
    } catch (err) {
      console.log(err);
      res.status(500).json({ message: 'Internal server error' });
      return;
    }
    client.close();

    res.status(201).json({ messahe: 'Message saved' });
  }
};
