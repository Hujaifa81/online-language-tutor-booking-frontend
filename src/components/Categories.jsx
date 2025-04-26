import React from 'react';
import SingleCategoryCard from './SingleCategoryCard';

const Categories = () => {
    return (
        <div>
            <div className='p-6 grid grid-cols-3 gap-4'>
            <SingleCategoryCard></SingleCategoryCard>
            <SingleCategoryCard></SingleCategoryCard>
            <SingleCategoryCard></SingleCategoryCard>
            <SingleCategoryCard></SingleCategoryCard>
            <SingleCategoryCard></SingleCategoryCard>
            <SingleCategoryCard></SingleCategoryCard>
            </div>
        </div>
    );
};

export default Categories;