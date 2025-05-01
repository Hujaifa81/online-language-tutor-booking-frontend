import React from 'react';
import SingleCategoryCard from './SingleCategoryCard';
import axios from 'axios';
import toast from 'react-hot-toast';
import { useQuery } from '@tanstack/react-query';
import Loading from './Loading';

const Categories = () => {
    const fetchCategories = async () => {
            try {
                const response = await axios.get(`${import.meta.env.VITE_baseURL}/categoryCounts`);
                return response.data;
            } catch (error) {
                toast.error(`Failed to fetch categories ${error.message}`);
                throw new Error('Failed to fetch categories');
            }
        };
        const { data, isLoading, isError, error } = useQuery({
            queryKey: ['categories'],  
            queryFn: fetchCategories,
        });
        
    
        if (isLoading) {
            return <Loading />; // Ensure Loading component is properly defined
        }
    
        if (isError) {
            return <div>Error: {error.message}</div>;
        }
        
        

    return (
        <div>
            <div className='p-6 grid grid-cols-3 gap-4'>
                {
                    data?.map((category) => (
                        <SingleCategoryCard key={category._id} category={category._id} count={category.count}></SingleCategoryCard>
                    ))
                }
                
            
           
            </div>
        </div>
    );
};

export default Categories;