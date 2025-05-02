import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import Loading from '../components/Loading';
import { Link, useParams } from 'react-router-dom';

const FindTutors = () => {
    const { category } = useParams()
    const [categoryName] = useState(category || '')
    const [totalItems, setTotalItems] = useState(0);
    const [itemsPerPage] = useState(2);
    const [currentPage, setCurrentPage] = useState(1);
    const numberOfPages = Math.ceil(totalItems / itemsPerPage);
    const numberOfButtons = [...Array(numberOfPages).keys()];

    // Fetch total number of tutors once on mount
    useEffect(() => {
        axios.get(`${import.meta.env.VITE_baseURL}/tutors/count?category=${categoryName}`)
            .then(res => setTotalItems(res.data.count))
            .catch(err => {
                console.error('Failed to fetch count:', err);
                toast.error('Failed to fetch tutor count');
            });
    }, [categoryName]);

    // Fetch paginated tutor data
    const fetchTutors = async () => {
        try {
            const response = await axios.get(`${import.meta.env.VITE_baseURL}/tutors?page=${currentPage}&limit=${itemsPerPage}&category=${categoryName}`);
            return response.data;
        } catch (error) {
            toast.error('Failed to fetch tutors', error.message);

        }
    };

    const { data: tutors, isLoading, isError, error } = useQuery({
        queryKey: ['tutors', currentPage, itemsPerPage],
        queryFn: fetchTutors,
        keepPreviousData: true,
    });

    if (isLoading) return <Loading />;
    if (isError) return <div>Error: {error.message}</div>;

    return (
        <div className="p-6">
            <h2 className="text-2xl font-bold mb-4">Tutors Available</h2>
            {tutors?.length === 0 ? (
                <p>No tutors found.</p>
            ) : (
                <div>
                    {tutors.map((tutor) => (
                        <div key={tutor._id} className="border p-4 mb-4 rounded shadow">
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

            {/* Pagination Buttons */}
            <div className="mt-4 space-x-2">
                <button

                    onClick={() => currentPage > 1 && setCurrentPage(currentPage - 1)}
                    disabled={currentPage === 1}
                    className={`border px-4 py-2 rounded`}
                >
                    Previous
                </button>
                {numberOfButtons.map((button) => (
                    <button
                        key={button}
                        onClick={() => setCurrentPage(button + 1)}
                        className={`border px-4 py-2 rounded ${currentPage === (button + 1)
                            ? 'bg-blue-500 text-white'
                            : 'bg-white text-black'
                            }`}
                    >
                        {button + 1}
                    </button>
                ))}
                <button

                    onClick={() => currentPage < numberOfPages && setCurrentPage(currentPage + 1)}
                    disabled={currentPage === numberOfPages}
                    className={`border px-4 py-2 rounded`}
                >
                    Next
                </button>
            </div>
        </div>
    );
};

export default FindTutors;
