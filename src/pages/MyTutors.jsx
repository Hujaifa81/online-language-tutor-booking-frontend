import axios from 'axios';
import React from 'react';
import useAuth from '../hooks/useAuth';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import Loading from '../components/Loading';

const MyTutors = () => {
    const { user } = useAuth();
    const queryClient = useQueryClient();
    const fetchMyAddedTutors = async () => {
        try {
            const response = await axios.get(`${import.meta.env.VITE_baseURL}/tutors/${user?.email}`);
            return response.data;
        } catch (error) {
            toast.error('Failed to fetch tutors');
            throw new Error('Failed to fetch tutors');
        }
    };
    const handleDelete = async (id) => {
        try {
            const response = await axios.delete(`${import.meta.env.VITE_baseURL}/tutor/${id}`);
            
            return response.data;
        } catch (error) {
            toast.error('Failed to delete tutor');
            throw new Error('Failed to delete tutor');
        }
    }
    const handleUpdate = async (data) => { }
    
    const { data, isLoading, isError, error,refetch } = useQuery({
        queryKey: ['myAddedTutors'],
        queryFn: fetchMyAddedTutors,
    });

    const { mutate, isPending, isSuccess, isError: deleteIsError, error: deleteError } = useMutation({
        mutationFn: handleDelete,
        onSuccess: async () => {
            toast.success('Tutor deleted successfully!');
            queryClient.invalidateQueries({ queryKey: ['myAddedTutors'] });
            queryClient.invalidateQueries({ queryKey: ['tutors'] });
            await refetch(); // Refetch the data after deletion

             // Optional if you want even stronger guarantee
        },
        onError: (error) => {
            toast.error(`Delete failed: ${error.message}`);
        }
    });



    if (isLoading) {
        return <Loading />;
    }

    if (isError) {
        return <div>Error: {error.message}</div>;
    }
    return (
        <div>
            <div className="min-h-screen bg-gray-100 py-10 px-6">
                <div className="overflow-x-auto bg-white shadow-lg rounded-lg">
                    <table className="min-w-full table-auto">
                        <thead className="bg-blue-600 text-white">
                            <tr>
                                <th className="px-6 py-3 text-left text-sm font-semibold">Image</th>
                                <th className="px-6 py-3 text-left text-sm font-semibold">Name</th>
                                <th className="px-6 py-3 text-left text-sm font-semibold">Language</th>
                                <th className="px-6 py-3 text-left text-sm font-semibold">Price</th>
                                <th className="px-6 py-3 text-left text-sm font-semibold">Description</th>
                                <th className="px-6 py-3 text-left text-sm font-semibold">Review</th>
                                <th className="px-6 py-3 text-left text-sm font-semibold">Actions</th>
                            </tr>
                        </thead>

                        <tbody className="divide-y divide-gray-200">
                            {data?.length > 0 ? (
                                data.map((data) => (
                                    <tr key={data._id} className="hover:bg-gray-50 transition">
                                        <td className="px-6 py-4">
                                            <img
                                                src={data.image}
                                                alt={data.name}
                                                className="w-16 h-16 object-cover rounded"
                                            />
                                        </td>
                                        <td className="px-6 py-4 font-medium text-gray-800">{data.name}</td>
                                        <td className="px-6 py-4 text-gray-600">{data.language}</td>
                                        <td className="px-6 py-4 text-blue-600 font-semibold">${data.price}</td>
                                        <td className="px-6 py-4 text-gray-600">{data.description.slice(0, 50)}...</td>
                                        <td className="px-6 py-4 text-gray-600">{data.review}</td>
                                        <td className="px-6 py-4 space-x-2">
                                            <button
                                                onClick={() => handleUpdate(data)}
                                                className="bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded-md text-sm"
                                            >
                                                Update
                                            </button>
                                            <button
                                                onClick={() => mutate(data._id)}
                                                className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-md text-sm"
                                            >
                                                Delete
                                            </button>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="7" className="px-6 py-10 text-center text-gray-500">
                                        No data found!
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default MyTutors;