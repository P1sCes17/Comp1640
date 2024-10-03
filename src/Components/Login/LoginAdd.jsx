import React, { useState } from 'react';
import { database } from './firebaseConfig'; // import Firebase config
import { ref, set } from 'firebase/database';
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';

const LoginAdd = () => {
  const [gmail, setGmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');
  const [department, setDepartment] = useState('');
  const [loading, setLoading] = useState(false);

  const handleAddAccount = async () => {
    const newUserId = uuidv4(); // Tạo ID duy nhất cho user
    setLoading(true);

    // Thêm tài khoản vào Firebase Database
    try {
      await set(ref(database, `users/${newUserId}`), {
        gmail,
        username,
        password,
        role,
        department,
      });

      // Nếu bạn sử dụng Axios để gửi request đến API khác
      // axios.post('api-url', { gmail, username, password, role, department });

      alert('Tài khoản đã được tạo thành công!');
      setLoading(false);
    } catch (error) {
      console.error('Lỗi khi tạo tài khoản:', error);
      setLoading(false);
    }
  };

  return (
    <div>
      <h2>Thêm tài khoản</h2>
      <input 
        type="text" 
        placeholder="Gmail" 
        value={gmail} 
        onChange={(e) => setGmail(e.target.value)} 
      />
      <input 
        type="text" 
        placeholder="Username" 
        value={username} 
        onChange={(e) => setUsername(e.target.value)} 
      />
      <input 
        type="password" 
        placeholder="Password" 
        value={password} 
        onChange={(e) => setPassword(e.target.value)} 
      />
      <input 
        type="text" 
        placeholder="Role" 
        value={role} 
        onChange={(e) => setRole(e.target.value)} 
      />
      <input 
        type="text" 
        placeholder="Department" 
        value={department} 
        onChange={(e) => setDepartment(e.target.value)} 
      />
      <button onClick={handleAddAccount} disabled={loading}>
        {loading ? 'Đang xử lý...' : 'Tạo tài khoản'}
      </button>
    </div>
  );
};

export default LoginAdd;
