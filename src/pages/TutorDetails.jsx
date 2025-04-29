import React from 'react';
import { useParams } from 'react-router-dom';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';
import Loading from '../components/Loading';
import useAuth from '../hooks/useAuth';
import toast from 'react-hot-toast';

const TutorDetails = () => {
    const { id } = useParams();
    const { user } = useAuth();
    const queryClient = useQueryClient();

    
    const fetchTutorData = async () => {
        const response = await axios.get(`${import.meta.env.VITE_baseURL}/tutor/${id}`);
        return response.data;
    };

    const handleBook = async () => {
        const bookingData = {
            tutor_id: id,
            image,
            language,
            price,
            tutor_email: email,
            email: user?.email,
        };
        const res = await axios.post(`${import.meta.env.VITE_baseURL}/bookedTutor`, bookingData);
        return res.data;
    };

  
    const { data, isLoading, isError, error } = useQuery({
        queryKey: ['tutorDetails', id],
        queryFn: fetchTutorData,
    });

    const { mutate, isPending, isSuccess, isError: bookedIsError, error: bookedError } = useMutation({
        mutationFn: handleBook,
        onSuccess: () => {
            toast.success('Tutor booked successfully!');
            queryClient.invalidateQueries(['bookedTutors']);
        },
        onError: (error) => {
            toast.error(`Booking failed: ${error.message}`);
        }
    });

    const { name, image, language, description, price, review, email } = data || {};

    if (isLoading) return <Loading />;
    if (isError) return <div>Error: {error.message}</div>;

    return (
        <div className="max-w-md mx-auto bg-white dark:bg-gray-800 rounded-2xl shadow overflow-hidden transform hover:scale-105 transition duration-300">
            {/* Tutor Image */}
            <img
                src={image}
                alt={name}
                className="w-full h-64 object-cover"
            />

            {/* Tutor Details */}
            <div className="p-6">
                <h2 className="text-2xl font-bold text-gray-800 dark:text-white">{name}</h2>
                <p className="text-blue-500 font-semibold mt-2">{language}</p>

                <p className="mt-4 text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                    {description}
                </p>

                <div className="flex justify-between items-center text-gray-500 dark:text-gray-400 text-sm mt-4">
                    <span>Rating: {review} ⭐</span>
                </div>

                <div className="flex justify-between items-center mt-6">
                    <span className="text-blue-600 text-xl font-bold">${price} / hr</span>
                    <button
                        onClick={() => mutate()}
                        disabled={isPending || isSuccess}
                        className={`px-4 py-2 rounded-lg transition ${isPending || isSuccess
                                ? 'bg-blue-400 cursor-not-allowed'
                                : 'bg-blue-600 hover:bg-blue-700 text-white'
                            }`}
                    >
                        {isPending ? 'Booking...' : isSuccess ? 'Booked!' : 'Book Now'}
                    </button>

                </div>
            </div>
        </div>
    );
};

export default TutorDetails;
