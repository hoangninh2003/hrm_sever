// src/pages/api/checkConnection.js

import clientPromise from '../../lib/mongodb';

export default async function handler(req, res) {
  try {
    const client = await clientPromise;
    await client.db('admin').command({ ping: 1 });
    res.status(200).json({ message: 'Kết nối đến MongoDB thành công!' });
  } catch (error) {
    res.status(500).json({ message: 'Lỗi MongoDB', error });
  }
}
