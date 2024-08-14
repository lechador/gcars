'use client'
import { useState, useEffect } from 'react';
import { useAuth } from '../AuthContext';
import axios from 'axios';
import { toast } from 'react-toastify';
import AdminNavbar from '../components/adminNavbar';
import Spinner from '../components/spinner';
import { useRouter } from 'next/navigation';

const ProtectedRoute = () => {
    const router = useRouter()
  const { authState } = useAuth();
  const [clientData, setClientData] = useState({ username: '', password: '' });
  const [clients, setClients] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchClients = async () => {
      try {
        const response = await axios.get('/get_clients.php');
        setClients(response.data.clients);
      } catch (error) {
        console.error('Error fetching clients:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchClients();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setClientData({ ...clientData, [name]: value });
  };

  const handleCreateClient = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/create_client.php', clientData);
      if (response.data.status === 'success') {
        try {
            const response = await axios.get('/get_clients.php');
            setClients(response.data.clients);
          } catch (error) {
            console.error('Error fetching clients:', error);
          }
          setClientData({ username: '', password: '' })
      } else {
        toast.error("რაღაც შეცდომაა")
      }

    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleDeleteClient = async (clientId) => {
    try {
      const response = await axios.post('/delete_client.php', { id: clientId });
      if (response.data.status === 'success') {
        setClients(clients.filter(client => client.id !== clientId)); // Remove the deleted client from the state
      } else {
        alert(response.data.message);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  if (authState.loading || loading) {
    return <Spinner />
  }

  if (!authState.isAuthenticated) {
    router.replace('/login')
  }

  if (authState.role == 'client'){ 
    router.replace('/admin/dealer')
  }

  return (
    <>
    <AdminNavbar>
        <div className='max-w-lg'>
            <h1 className="text-3xl font-bold mb-6 text-center">დილერების მართვა</h1>
            {authState.role === 'superuser' ? (
            <>
                <form onSubmit={handleCreateClient} className="space-y-6 mb-8">
                <div>
                    <label className="block text-white font-semibold mb-2" htmlFor="username">მომხმარებლის სახელი:</label>
                    <input
                    type="text"
                    name="username"
                    id="username"
                    value={clientData.username}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
                    required
                    />
                </div>
                <div>
                    <label className="block text-white font-semibold mb-2" htmlFor="password">მომხმარებლის პაროლი:</label>
                    <input
                    type="password"
                    name="password"
                    id="password"
                    value={clientData.password}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
                    required
                    />
                </div>
                <button
                    type="submit"
                    className="w-full bg-yellow-600 text-white py-3 rounded-lg hover:bg-yellow-700 transition duration-300 font-semibold"
                >
                    დილერის დამატება
                </button>
                </form>
                <h2 className="text-2xl font-bold mb-4">არსებული დილერები</h2>
                <div className="overflow-x-auto">
                <table className="min-w-full bg-white border border-gray-200">
                    <thead>
                    <tr className="bg-gray-50">
                        <th className="py-3 px-4 border-b text-left text-gray-700 font-semibold">მომხმარებელი</th>
                        <th className="py-3 px-4 border-b"></th>
                    </tr>
                    </thead>
                    <tbody>
                    {clients.map(client => (
                        <tr key={client.id} className="hover:bg-gray-100 transition duration-300">
                        <td className="py-3 px-4 border-b text-gray-800">{client.username}</td>
                        <td className="py-3 px-4 border-b text-right">
                            <button
                            onClick={() => handleDeleteClient(client.id)}
                            className="bg-red-600 text-white py-2 px-4 rounded hover:bg-red-700 transition duration-300 font-semibold"
                            >
                            წაშლა
                            </button>
                        </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
                </div>
            </>
            ) : (
            <p className="text-red-500 text-center font-semibold">You do not have permission to create client accounts.</p>
            )}
        </div>
        </AdminNavbar>
    </>
  );
};

export default ProtectedRoute;
