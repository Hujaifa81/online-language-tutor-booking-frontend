import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react';
import toast from 'react-hot-toast';
import Loading from '../components/Loading';
import { Link, useParams } from 'react-router-dom';

const FindTutors = () => {
    const {category} = useParams();
    const fetchTutorsByCategory = async () => {
        try {
            const response = await axios.get(`${import.meta.env.VITE_baseURL}/tutors?category=${category}`);
            return response.data;
        } catch (error) {
            toast.error('Failed to fetch tutors by category');
            throw new Error('Failed to fetch tutors by category');
        }
    };
    const { data: tutorsByCategory, isLoading: isLoadingByCategory, isError: isErrorByCategory, error: errorByCategory } = useQuery({
        queryKey: ['tutorsCategory', category],  
        queryFn: fetchTutorsByCategory,
    });
     
    const fetchTutors = async () => {
        try {
            const response = await axios.get(`${import.meta.env.VITE_baseURL}/tutors`);
            return response.data;
        } catch (error) {
            toast.error('Failed to fetch tutors');
            throw new Error('Failed to fetch tutors');
        }
    };

    const { data:tutors, isLoading, isError, error } = useQuery({
        queryKey: ['tutors'],  // This is still valid as a query key, just inside an object now
        queryFn: fetchTutors,
    });
    

    if (isLoading) {
        return <Loading />; // Ensure Loading component is properly defined
    }

    if (isError) {
        return <div>Error: {error.message}</div>;
    }
    let data=tutors
    if(category){
        data=tutorsByCategory ||[]
    }

    return (
        <div>
            
                <div>
                    
                <h2 className="text-2xl font-bold mb-4">Tutors Available</h2>
                {data?.length === 0 ? (
                    <p>No tutors found.</p>
                ) : (
                    <div>
                        {data.map((tutor) => (
                            <div key={tutor._id} className="border p-4 mb-4 rounded shadow">
                                <h3 className="text-xl font-semibold">{tutor.name}</h3>
                                <p>Email: {tutor.email}</p>
                                <p>Language: {tutor.language}</p>
                                <p>Price: ${tutor.price}</p>
                                <img  referrerPolicy="no-referrer" src={tutor.image} alt={tutor.name} className="w-32 h-32 object-cover rounded" />
                                <p>Rating: {tutor.review}</p>
                                <button><Link to={`/tutor/details/${tutor._id}`}>Details</Link></button>
                            </div>
                        ))}
                    </div>
                )}
            </div>
            
        </div>
    );
};

export default FindTutors;
