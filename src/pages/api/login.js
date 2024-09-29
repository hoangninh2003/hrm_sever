import clientPromise from '../../lib/mongodb';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  try {
    const client = await clientPromise;
    const db = client.db('hrm');

    const { phone, password } = req.body;

    const user = await db.collection('users').findOne({ phone });

    if (user && user.password === password) {
      return res.status(200).json({ message: 'Đăng nhập thành công!' });
    } else {
      return res.status(401).json({ message: 'Tên đăng nhập hoặc mật khẩu không đúng.' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Lỗi kết nối đến cơ sở dữ liệu', error });
  }
}
