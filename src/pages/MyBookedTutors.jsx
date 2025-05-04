import axios from 'axios';
import React from 'react';
import useAuth from '../hooks/useAuth';
import toast from 'react-hot-toast';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import Loading from '../components/Loading';

const MyBookedTutors = () => {
    const {user}= useAuth();
    const queryClient = useQueryClient();
    const fetchMyBookedTutors = async () => {
        try {
            const response = await axios.get(`${import.meta.env.VITE_baseURL}/bookedTutors/${user?.email}`);
            return response.data;
        } catch (error) {
            toast.error('Failed to fetch tutors');
            throw new Error('Failed to fetch tutors');
        }
    };
    const updateTutor = async (id) => {
        try {
            const response = await axios.patch(`${import.meta.env.VITE_baseURL}/tutor/${id}`);
            return response.data;
        } catch (error) {
            toast.error('Failed to update tutor');
            throw new Error('Failed to update tutor');
        }
    }

    const { data, isLoading, isError, error } = useQuery({
        queryKey: ['bookedTutors'],  
        queryFn: fetchMyBookedTutors,
    });
    const { mutate, isPending, isSuccess, isError: bookedIsError, error: bookedError } = useMutation({
        mutationFn: updateTutor,
        onSuccess: () => {
            toast.success('Tutor updated successfully!');
            queryClient.invalidateQueries(['tutors']);
        },
        onError: (error) => {
            toast.error(`Booking failed: ${error.message}`);
        }})
    

    if (isLoading) {
        return <Loading/>; 
    }

    if (isError) {
        return <div>Error: {error.message}</div>;
    }
    return (
        <div className='dark:bg-black'>
            {data.length === 0 ? (
                <p className="text-center text-2xl font-bold dark:text-white">No booked tutors found.</p>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4 dark:bg-gray-300">
                    {data.map((tutor) => (
                        <div key={tutor._id} className="border p-4 rounded shadow">
                            <h3 className="text-xl font-semibold">{tutor.tutor_name}</h3>
                            <p>Email: {tutor.tutor_email}</p>
                            <p>Language: {tutor.language}</p>
                            <p>Price: ${tutor.price}</p>
                            <img referrerPolicy="no-referrer" src={tutor.image} alt={tutor.tutor_name} className="w-32 h-32 object-cover rounded" />
                            <button className="mt-2 bg-blue-500 text-white px-4 py-2 rounded" onClick={()=>mutate(tutor.tutor_id)}>Review</button>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default MyBookedTutors;