import clientPromise from '../../lib/mongodb';

export default async function handler(req, res) {
  try {
    const client = await clientPromise;
    const db = client.db("hrm");

    switch (req.method) {
      case 'GET':
        // Lấy danh sách nhân viên
        const employees = await db.collection('employees').find({}).toArray();
        res.status(200).json({ employees });
        break;

      case 'POST':
        // Thêm một nhân viên mới
        const { phone, pass, fullname, birth, adress, office, status } = req.body;
        if (!phone || !pass || !fullname || !birth || !adress || !office || status === undefined) {
          return res.status(400).json({ message: 'Thiếu thông tin nhân viên' });
        }
        const newEmployee = {
          phone,
          pass,
          fullname,
          birth,
          adress,
          office,
          status,
          createdAt: new Date(),
        };
        await db.collection('employees').insertOne(newEmployee);
        res.status(201).json({ message: 'Thêm nhân viên thành công', employee: newEmployee });
        break;

      default:
        res.setHeader('Allow', ['GET', 'POST', 'PUT', 'DELETE']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
  } catch (error) {
    res.status(500).json({ message: 'Lỗi kết nối đến cơ sở dữ liệu', error });
  }
}
