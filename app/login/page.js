'use client'
import { useState } from 'react';
import { useAuth } from '../AuthContext';
import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation';
import Spinner from '../components/spinner';

const LoginPage = () => {
    const router = useRouter()
  const { login, authState } = useAuth();
  const [formData, setFormData] = useState({ username: '', password: '' });
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await login(formData.username, formData.password);
    if (response.status !== 'success') {
      setError(response.message);
      toast.error("რაღაც არასწორია")
    }
  };

  if (authState.loading) {
    return <Spinner />
  }

  if (authState.isAuthenticated) {
    if(authState.role == 'superuser'){ 
      router.replace('/admin')
    } else if (authState.role == 'client'){ 
      router.replace('/admin/dealer')
    }
  }

  return (
    <div className="flex items-center justify-center py-4">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center text-black">ავტორიზაცია</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2" htmlFor="username">მომხმარებელი:</label>
            <input
              type="text"
              name="username"
              id="username"
              value={formData.username}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2" htmlFor="password">პაროლი:</label>
            <input
              type="password"
              name="password"
              id="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
          </div>
          {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
          <button
            type="submit"
            className="w-full bg-yellow-600 text-white py-2 rounded-lg hover:bg-yellow-700 transition duration-300"
          >
            შესვლა
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
