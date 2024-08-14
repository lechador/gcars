'use client';
import { useState, useEffect } from 'react';
import axios from 'axios';
import AdminNavbar from '@/app/components/adminNavbar';
import { useAuth } from '@/app/AuthContext';
import Spinner from '@/app/components/spinner';
import { useRouter } from 'next/navigation';

const CarTable = () => {
    const { authState } = useAuth()
    const router = useRouter()
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true)
  const [selectedCar, setSelectedCar] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [mainImage, setMainImage] = useState('');

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

  const handleRowClick = (car) => {
    setSelectedCar(car);
    setIsModalOpen(true);
    const images = car.images ? car.images.split(',') : [];
    setMainImage(images[0] || '');
  };

  const handleThumbnailClick = (image) => {
    setMainImage(image);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedCar(null);
    setMainImage('');
  };

  if (authState.loading || loading) {
    return <Spinner />
  }

  if (!authState.isAuthenticated) {
    router.replace('/login')
  }

  return (
    <>
      <AdminNavbar>
        <div className="flex w-full overflow-x-auto">
          <table className="table-compact table max-w-4xl">
            <thead>
              <tr>
                <th>ID</th>
                <th>ბრენდი</th>
                <th>მოდელი</th>
                <th>გამოშვების წელი</th>
                <th>VIN</th>
                <th>VIN-ის შემოწმება</th>
              </tr>
            </thead>
            <tbody>
              {cars.map((car) => (
                <tr key={car.id} onClick={() => handleRowClick(car)} className="cursor-pointer hover:bg-slate-950 !h-16">
                  <td className='!h-16'>{car.id}</td>
                  <td className='!h-16'>{car.brand}</td>
                  <td className='!h-16'>{car.model}</td>
                  <td className='!h-16'>{car.year}</td>
                  <td className='!h-16'>{car.vin_code}</td>
                  <td className='!h-16'>
                    <a
                      href={`https://www.kbb.com/cars-for-sale/experian?SID=5021648&VIN=${car.vin_code}&brand=kbb&ps=false&make=MINI`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className='rounded bg-yellow-600 text-black px-1 py-2'
                    >
                      Check VIN
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Modal */}
        {isModalOpen && selectedCar && (
          <>
            <input className="modal-state" id="modal-1" type="checkbox" checked readOnly />
            <div className="modal">
              <label className="modal-overlay" htmlFor="modal-1" onClick={handleCloseModal}></label>
              <div className="modal-content flex flex-col md:flex-row gap-5 p-5 bg-white rounded shadow-lg max-w-full mx-auto overflow-hidden">
                <label htmlFor="modal-1" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" onClick={handleCloseModal}>✕</label>
                
                {mainImage && (
                  <div className="flex-shrink-0 w-full md:w-1/3">
                    <img src={`/${mainImage}`} alt={selectedCar.model} className="w-full h-auto object-cover rounded" />
                  </div>
                )}
                
                <div className="flex-grow text-black">
                    <h2 className="text-2xl font-bold mb-4">{selectedCar.brand} {selectedCar.model}</h2>
                    <p><strong>გამოშვების წელი:</strong> {selectedCar.year}</p>
                    <p><strong>VIN კოდი:</strong> {selectedCar.vin_code}</p>
                    <p><strong>აუქციონის სახელი:</strong> {selectedCar.auction_name}</p>
                    <p><strong>შეძენის თარიღი:</strong> {selectedCar.purchase_date}</p>
                    <p><strong>საწყობში მისვლის თარიღი:</strong> {selectedCar.warehouse_arrive_date}</p>
                    <p><strong>პორტი:</strong> {selectedCar.port}</p>
                    <p><strong>ავტომობილის ადგილმდებარეობა:</strong> {selectedCar.location}</p>
                    <p><strong>ავტომობილის ფასი აუქციონზე:</strong> {selectedCar.auction_price}</p>
                    <p><strong>ავტომობილის ჩამოყვანის ღირებულება:</strong> {selectedCar.shipment_price}</p>
                    <p><strong>მიმღების სახელი:</strong> {selectedCar.receiver_phone}</p>
                    <p><strong>მიმღების ტელეფონის ნომერი:</strong> {selectedCar.receiver_fee_car}</p>
                </div>

                
                {selectedCar.images && (
                  <div className="flex flex-col md:flex-row md:w-1/3 space-y-2 md:space-y-0 md:space-x-2">
                    {selectedCar.images.split(',').map((image, index) => (
                      <img
                        key={index}
                        src={`/${image}`}
                        alt={`Thumbnail ${index + 1}`}
                        className={`w-24 h-24 object-cover rounded cursor-pointer ${image === mainImage ? 'border-2 border-blue-500' : ''}`}
                        onClick={() => handleThumbnailClick(image)}
                      />
                    ))}
                  </div>
                )}
              </div>
            </div>
          </>
        )}
      </AdminNavbar>
    </>
  );
};

export default CarTable;
