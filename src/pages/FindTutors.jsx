import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import Loading from '../components/Loading';
import { Link, useParams } from 'react-router-dom';

const FindTutors = () => {
  const { category } = useParams();
  const categoryName = category || '';
  const [totalItems, setTotalItems] = useState(0);
  const [itemsPerPage] = useState(6);
  const [currentPage, setCurrentPage] = useState(1);
  const [search, setSearch] = useState('');

  const numberOfPages = Math.ceil(totalItems / itemsPerPage);
  const numberOfButtons = [...Array(numberOfPages).keys()];

  // Fetch total count
  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_baseURL}/tutors/count?category=${categoryName}&search=${search}`)
      .then(res => {setTotalItems(res.data.count)
        
      })
      .catch(err => {
        
        toast.error('Failed to fetch tutor count',err.message);
      });
  }, [categoryName, search]);

  // Fetch paginated tutors
  const fetchTutors = async () => {
    try {
      const res = await axios.get(
        `${import.meta.env.VITE_baseURL}/tutors?page=${currentPage}&limit=${itemsPerPage}&category=${categoryName}&search=${search}`
      );
      return res.data;
    } catch (error) {
      toast.error('Failed to fetch tutors');
      throw error;
    }
  };

  const {
    data: tutors,
    isLoading,
    isError,
    error
  } = useQuery({
    queryKey: ['tutors', currentPage, itemsPerPage, search,categoryName],
    queryFn: fetchTutors,
    keepPreviousData: true
  });

  return (
    <div className="p-6 dark:bg-gray-900">
      {/* Search input  */}
      {
      category?'': (
        <div className="mb-4 w-1/2 mx-auto">
          <input
            type="text"
            placeholder="Search tutors by language..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="border p-2 rounded w-full dark:bg-gray-800 dark:text-red-500"
          />
        </div>
      )}

      

      {/* Main content */}
      {isLoading ? (
        <Loading />
      ) : isError ? (
        <div>Error: {error.message}</div>
      ) : (
        <>
          <h2 className="text-2xl font-bold mb-4 dark:text-gray-400 ">Tutors Available</h2>
          {tutors?.length === 0 ? (
            <p>No tutors found.</p>
          ) : (
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
              {tutors.map((tutor) => (
                <div key={tutor._id} className="border p-4 mb-4 rounded  dark:bg-gray-800">
                  <h3 className="text-xl font-semibold">{tutor.name}</h3>
                  <p>Email: {tutor.email}</p>
                  <p>Language: {tutor.language}</p>
                  <p>Price: ${tutor.price}</p>
                  <img
                    referrerPolicy="no-referrer"
                    src={tutor.image}
                    alt={tutor.name}
                    className="w-32 h-32 object-cover rounded"
                  />
                  <p>Rating: {tutor.review}</p>
                  <Link to={`/tutor/details/${tutor._id}`}>
                    <button className="mt-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                      Details
                    </button>
                  </Link>
                </div>
              ))}
            </div>
          )}

          {/* Pagination */}
          <div className="mt-4 space-x-2 flex justify-center items-center">
            <button
              onClick={() => currentPage > 1 && setCurrentPage(currentPage - 1)}
              disabled={currentPage === 1}
              className="border px-4 py-2 rounded dark:text-gray-400"
            >
              Previous
            </button>
            {numberOfButtons.map((button) => (
              <button
                key={button}
                onClick={() => setCurrentPage(button + 1)}
                className={`border px-4 py-2 rounded ${
                  currentPage === button + 1 ? 'bg-blue-500 text-white' : ' text-black'
                }`}
              >
                <span className='dark:text-gray-400'>{button + 1}</span>
              </button>
            ))}
            <button
              onClick={() => currentPage < numberOfPages && setCurrentPage(currentPage + 1)}
              disabled={currentPage === numberOfPages}
              className="border px-4 py-2 rounded dark:text-gray-400"
            >
              Next
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default FindTutors;
