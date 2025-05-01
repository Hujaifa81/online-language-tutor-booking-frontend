import axios from 'axios';
import React, { useState } from 'react';
import useAuth from '../hooks/useAuth';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import Loading from '../components/Loading';
import Modal from '../components/Modal';
import useAxiosSecure from '../hooks/useAxiosSecure';

const MyTutors = () => {
  const { user } = useAuth();
  const [tutorData, setTutorData] = useState(null);
  const axiosSecure=useAxiosSecure()
  const queryClient = useQueryClient();
  

  const fetchMyAddedTutors = async () => {
    // const response = await axios.get(`${import.meta.env.VITE_baseURL}/tutors/${user?.email}`,{withCredentials:true});
    const response=await axiosSecure.get(`/tutors/${user?.email}`)
    return response.data;
  };

  const handleDelete = async (id) => {
    const response = await axios.delete(`${import.meta.env.VITE_baseURL}/tutor/${id}`);
    return response.data;
  };

  const { data, isLoading, isError, error, refetch } = useQuery({
    queryKey: ['myAddedTutors'],
    queryFn: fetchMyAddedTutors,
  });

  const { mutate, isPending } = useMutation({
    mutationFn: handleDelete,
    onSuccess: async () => {
      toast.success('Tutor deleted successfully!');
      queryClient.invalidateQueries(['myAddedTutors']);
        queryClient.invalidateQueries(['tutors']);
        queryClient.invalidateQueries(['bookedTutors']);
    },
    onError: (error) => {
      toast.error(`Delete failed: ${error.message}`);
    }
  });

  if (isLoading) return <Loading />;
  if (isError) return <div>Error: {error.message}</div>;

  return (
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
              data.map((tutor) => (
                <tr key={tutor._id} className="hover:bg-gray-50 transition">
                  <td className="px-6 py-4">
                    <img src={tutor.image} alt={tutor.name} className="w-16 h-16 object-cover rounded" />
                  </td>
                  <td className="px-6 py-4 font-medium text-gray-800">{tutor.name}</td>
                  <td className="px-6 py-4 text-gray-600">{tutor.language}</td>
                  <td className="px-6 py-4 text-blue-600 font-semibold">${tutor.price}</td>
                  <td className="px-6 py-4 text-gray-600">{tutor.description.slice(0, 50)}...</td>
                  <td className="px-6 py-4 text-gray-600">{tutor.review}</td>
                  <td className="px-6 py-4 space-x-2">
                    <button
                      onClick={() => setTutorData(tutor)}
                      className="bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded-md text-sm"
                    >
                      Update
                    </button>
                    <button
                      onClick={() => mutate(tutor._id)}
                      className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-md text-sm"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="7" className="px-6 py-10 text-center text-gray-500">No data found!</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <Modal
        
        
        tutor={tutorData}
        setTutorData={setTutorData}
      />
    </div>
  );
};

export default MyTutors;
