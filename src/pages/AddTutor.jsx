import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../hooks/useAuth';
import axios from 'axios';
import {  useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';

const AddTutor = () => {
    const { user } = useAuth();
    const { register, handleSubmit, setValue, reset, formState: { errors } } = useForm();
    
    const queryClient =  useQueryClient();
    // for loading issues
    useEffect(() => {
        if (user) {
            setValue('name', user.displayName || '');
            setValue('email', user.email || '');
            setValue('review', 0);
        }
    }, [user, setValue]);

    const handleTutorData = async (data) => {
        const res = await axios.post(`${import.meta.env.VITE_baseURL}/addTutor`, data);
        return res.data;
    }
    const { mutate, isPending, isSuccess, isError, error } = useMutation({
        mutationFn: handleTutorData,
        onSuccess: (data) => {
            toast.success('Tutor added successfully!');
            queryClient.invalidateQueries(['tutors']);
            reset({
                name: user?.displayName || '',
                email: user?.email || '',
                review: 0,
            }); 
          },
          onError: (error) => {
            toast.error(`Error: ${error.message}`);
          }
      });
    const onSubmit = async (data) => {
        const tutor = {
            ...data,
            price: parseFloat(data.price),
            review: parseFloat(data.review),
        };
        mutate(tutor); 
        
        
    };

    return (
        <div>
            <div className="max-w-xl mx-auto p-5 dark:bg-black">
                <h2 className="text-2xl font-bold mb-4 dark:text-white">Add Tutor</h2>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">

                    {/* Name */}
                    <div>
                        <label className="block font-medium dark:text-white">Name</label>
                        <input
                            type="text"
                            className="w-full border p-2 rounded dark:bg-gray-800"
                            readOnly
                            {...register("name", {
                                minLength: { value: 2, message: "Name must be at least 2 characters" }
                            })}
                        />
                        {errors.name && <p className="text-red-500">{errors.name.message}</p>}
                    </div>

                    {/* Email */}
                    <div>
                        <label className="block font-medium dark:text-white">Email</label>
                        <input
                            type="text"
                            className="w-full border p-2 rounded dark:bg-gray-900"
                            readOnly
                            {...register("email", {
                                pattern: { value: /^\S+@\S+$/, message: "Invalid email" }
                            })}
                        />
                        {errors.email && <p className="text-red-500">{errors.email.message}</p>}
                    </div>

                    {/* Image */}
                    <div>
                        <label className="block font-medium dark:text-white">Tutor Image URL</label>
                        <input
                            type="url"
                            className="w-full border p-2 rounded dark:bg-gray-800"
                            {...register("image", {
                                required: "Image URL is required",
                                pattern: { value: /^(http|https):\/\/[^ "]+$/, message: "Invalid URL" }
                            })}
                        />
                        {errors.image && <p className="text-red-500">{errors.image.message}</p>}
                    </div>

                    {/* Language */}
                    <div>
                        <label className="block font-medium dark:text-white">Language</label>
                        <input
                            type="text"
                            className="w-full border p-2 rounded dark:bg-gray-900"
                            {...register("language", {
                                required: "Language is required",
                                minLength: { value: 2, message: "Language must be at least 2 characters" }
                            })}
                        />
                        {errors.language && <p className="text-red-500">{errors.language.message}</p>}
                    </div>

                    {/* Price */}
                    <div>
                        <label className="block font-medium dark:text-white">Price ($)</label>
                        <input
                            type="number"
                            className="w-full border p-2 rounded dark:bg-gray-800"
                            {...register("price", {
                                required: "Price is required",
                                min: { value: 0, message: "Price must be at least 0" }
                            })}
                        />
                        {errors.price && <p className="text-red-500">{errors.price.message}</p>}
                    </div>

                    {/* Description */}
                    <div>
                        <label className="block font-medium dark:text-white">Description</label>
                        <textarea
                            className="w-full border p-2 rounded dark:bg-gray-800"
                            rows={3}
                            {...register("description", {
                                required: "Description is required",
                                minLength: { value: 10, message: "Description must be at least 10 characters" }
                            })}
                        ></textarea>
                        {errors.description && <p className="text-red-500">{errors.description.message}</p>}
                    </div>

                    {/* Review */}
                    <div>
                        <label className="block font-medium dark:text-white">Review</label>
                        <input
                            type="number"
                            className="w-full border p-2 rounded dark:bg-gray-800"
                            readOnly
                            {...register("review", {
                                required: "Review is required",
                                min: { value: 0, message: "Review must be at least 0" },
                                max: { value: 5, message: "Review must be at most 5" }
                            })}
                        />
                        {errors.review && <p className="text-red-500">{errors.review.message}</p>}
                    </div>

                    {/* Submit Button */}
                    <button type="submit" className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
                        disabled={isPending}>
                        {isPending ? 'Submitting...' : 'Submit'}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AddTutor;
