'use client'
import { useState, useEffect } from 'react';
import axios from 'axios';
import AdminNavbar from '@/app/components/adminNavbar';
import qs from 'qs';
import { useAuth } from '@/app/AuthContext';
import Spinner from '@/app/components/spinner';
import { useRouter } from 'next/navigation';

function CarApp() {
  const { authState } = useAuth()
  const router = useRouter()
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);
  const [newCar, setNewCar] = useState({
    id: null,
    brand: '',
    model: '',
    year: '',
    hybrid: '',
    key: '',
    vin_code: '',
    auction_lot: '',
    auction_name: '',
    purchase_date: '',
    warehouse_arrive_date: '',
    auction_price: '',
    shipment_price: '',
    receiver_phone: '',
    receiver_name: '',
    receiver_fee_car: '',
    receiver_fee_transportation: '',
    location: '',
    port: '',
    shipment_load_date: '',
    container_number: '',
    container_arrival_date: '',
    container_open_date: '',
    shipment_destination: '',
    images: [],
    existing_images: ''
  });

  useEffect(() => {
    fetchCars();
  }, []);

  const fetchCars = async () => {
    try {
      const response = await axios.get('/get_cars.php');
      setCars(response.data.cars);
    } catch (error) {
      console.error('Error fetching cars:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    try {
      const response = await axios.post('/delete_car.php', { id });
      if (response.data.status === 'success') {
        fetchCars();
      } else {
        alert(response.data.message);
      }
    } catch (error) {
      console.error('Error deleting car:', error);
    }
  };

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'images') {
      setNewCar({ ...newCar, [name]: files });
    } else {
      setNewCar({ ...newCar, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const formData = new FormData();
    for (const key in newCar) {
      if (key === 'images' && newCar.images.length > 0) {
        for (let i = 0; i < newCar.images.length; i++) {
          formData.append('images[]', newCar.images[i]);
        }
      } else if (key === 'existing_images') {
        // Do not include existing_images in the formData as it is handled on the server side
      } else {
        formData.append(key, newCar[key]);
      }
    }
  
    try {
      const url = newCar.id ? '/update_car.php' : '/add_car.php';
      const response = await axios.post(url, formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      if (response.data.status === 'success') {
        fetchCars();
        resetForm();
      } else {
        alert(response.data.message);
      }
    } catch (error) {
      console.error(`Error ${newCar.id ? 'updating' : 'adding'} car:`, error);
    }
  };
  

  const handleEdit = (car) => {
    setNewCar({
      ...car,
      images: [], // Clear the images field
      existing_images: car.images // Store the existing images
    });
  };

  const resetForm = () => {
    setNewCar({
      id: null,
      brand: '',
      model: '',
      year: '',
      hybrid: '',
      key: '',
      vin_code: '',
      auction_lot: '',
      auction_name: '',
      purchase_date: '',
      warehouse_arrive_date: '',
      auction_price: '',
      shipment_price: '',
      receiver_phone: '',
      receiver_name: '',
      receiver_fee_car: '',
      receiver_fee_transportation: '',
      location: '',
      port: '',
      shipment_load_date: '',
      container_number: '',
      container_arrival_date: '',
      container_open_date: '',
      shipment_destination: '',
      images: [],
      existing_images: ''
    });
  };

  const handleRemoveImage = async (carId, image) => {
    try {
      const response = await axios.post('/remove_image.php', qs.stringify({ id: carId, image }), {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      });
  
      if (response.data.status === 'success') {
        fetchCars(); // Refresh the car list after removing the image
      } else {
        alert(response.data.message);
      }
    } catch (error) {
      console.error('Error removing image:', error);
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
      <div className="container mx-auto p-4">
        <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-4 mb-8">
          {/* Form fields */}
          {[
            { name: 'brand', placeholder: 'ბრენდი' },
            { name: 'model', placeholder: 'მოდელი' },
            { name: 'year', placeholder: 'გამოშვების წელი' },
            { name: 'hybrid', placeholder: 'ჰიბრიდია?' },
            { name: 'key', placeholder: 'გასაღები აქვს?' },
            { name: 'vin_code', placeholder: 'VIN კოდი' },
            { name: 'auction_lot', placeholder: 'აუქციონის ლოტი' },
            { name: 'auction_name', placeholder: 'აუქციონის სახელი' },
            { name: 'purchase_date', placeholder: 'შეძენის თარიღი', type: 'date' },
            { name: 'warehouse_arrive_date', placeholder: 'საწყობში მისვლის თარიღი', type: 'date' },
            { name: 'auction_price', placeholder: 'ავტომობილის ფასი აუქციონზე' },
            { name: 'shipment_price', placeholder: 'ჩამოტანის ღირებულება' },
            { name: 'receiver_phone', placeholder: 'მიმღების ტელეფონის ნომერი' },
            { name: 'receiver_name', placeholder: 'მიმღების სახელი' },
            { name: 'receiver_fee_car', placeholder: 'მიმღების საკომისიო - მანქანა' },
            { name: 'receiver_fee_transportation', placeholder: 'მიმღების საკომისიო - ტრანსპორტირება' },
            { name: 'location', placeholder: 'ადგილმდებარეობა' },
            { name: 'port', placeholder: 'პორტი' },
            { name: 'shipment_load_date', placeholder: 'კონტეინერის დატვირთვის თარიღი', type: 'date' },
            { name: 'container_number', placeholder: 'კონტეინერის ნომერი' },
            { name: 'container_arrival_date', placeholder: 'კონტეინერის ჩამოსვლის თარიღი', type: 'date' },
            { name: 'container_open_date', placeholder: 'კონტეინერის გახსნის თარიღი', type: 'date' },
            { name: 'shipment_destination', placeholder: 'ჩამოსვლის ადგილი' }
          ].map((field) => (
            <label key={field.name} className="block">
              <span>{field.placeholder}</span>
              <input
                type={field.type || 'text'}
                name={field.name}
                value={newCar[field.name]}
                onChange={handleChange}
                placeholder={field.placeholder}
                className="p-2 border rounded w-full"
              />
            </label>
          ))}
          <label className="block">
            <span>სურათები</span>
            <input
              type="file"
              name="images"
              onChange={handleChange}
              multiple
              className="p-2 border rounded w-full"
            />
          </label>
          <button
            type="submit"
            className="col-span-1 md:col-span-2 lg:col-span-3 p-2 bg-blue-500 text-white rounded"
          >
            დამახსოვრება
          </button>
        </form>

        {/* Car list */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {cars.map((car) => (
                <div key={car.id} className="p-4 border rounded">
                  <p><strong>{car.brand}</strong> {car.model} ({car.year})</p>
                  <p>{car.auction_name}</p>
                  {car.images && car.images.split(',').map((image, index) => (
                    <div key={index} className="relative">
                      <img src={`/${image}`} alt="Car" className="w-32 h-32 object-cover mb-2" />
                      <button
                        onClick={() => handleRemoveImage(car.id, image)}
                        className="absolute top-0 right-0 bg-red-500 text-white p-1 rounded"
                      >
                        წაშლა
                      </button>
                    </div>
                  ))}
                  <button onClick={() => handleEdit(car)} className="mr-2 p-2 bg-green-500 text-white rounded">რედაქტირება</button>
                  <button onClick={() => handleDelete(car.id)} className="p-2 bg-red-500 text-white rounded">წაშლა</button>
                </div>
              ))}
            </div>
      </div>
      </AdminNavbar>
    </>
  );
}

export default CarApp;
