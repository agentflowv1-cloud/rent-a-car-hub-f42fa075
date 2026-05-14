import React from 'react';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './ExpandedCardDetailsScreen.css';

function ExpandedCardDetailsScreen() {
  const [rentACarService, setRentACarService] = useState({});
  const [imageUrl, setImageUrl] = useState('');
  const [description, setDescription] = useState('');
  const [features, setFeatures] = useState([]);

  useEffect(() => {
    // Fetch data from API or database
    const fetchRentACarService = async () => {
      try {
        const response = await fetch('/api/rent-a-car-service');
        const data = await response.json();
        setRentACarService(data);
        setImageUrl(data.imageUrl);
        setDescription(data.description);
        setFeatures(data.features);
      } catch (error) {
        console.error(error);
      }
    };
    fetchRentACarService();
  }, []);

  return (
    <div className='expanded-card-details-screen container mx-auto p-4 pt-6 md:p-6 lg:p-12 xl:p-24 '>
      <div className='flex flex-col items-center justify-center '>
        <img src={imageUrl} alt='Rent a Car Service' className='object-cover h-48 w-80 md:h-64 md:w-96 lg:h-80 lg:w-128 ' />
        <h1 className='text-3xl font-bold mt-4 mb-4 '>{rentACarService.name}</h1>
        <p className='text-lg '>{description}</p>
        <ul className='list-none '>
          {features.map((feature, index) => (
            <li key={index} className='text-lg '>{feature}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ExpandedCardDetailsScreen;