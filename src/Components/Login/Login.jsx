import React, { useState } from 'react';
import { auth } from './firebaseConfig';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [gmail, setGmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    setLoading(true);
    setError('');

    try {
      // Đăng nhập với Firebase Authentication
      await signInWithEmailAndPassword(auth, gmail, password);
      
      // Chuyển hướng đến trang quản lý sau khi đăng nhập thành công
      navigate('/login_manager');
    } catch (err) {
      setError('Đăng nhập thất bại, vui lòng kiểm tra lại thông tin.');
      setLoading(false);
    }
  };

  return (
    <div>
      <h2>Đăng nhập</h2>
      <input
        type="text"
        placeholder="Gmail"
        value={gmail}
        onChange={(e) => setGmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin} disabled={loading}>
        {loading ? 'Đang xử lý...' : 'Đăng nhập'}
      </button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
};

export default Login;
