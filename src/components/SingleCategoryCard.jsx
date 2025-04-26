import React from 'react';
import { IoIosArrowDropright } from 'react-icons/io';

const SingleCategoryCard = () => {
    return (
        <div className=''>
            <div className='flex items-center border border-gray-300 w-full  px-4 py-4 justify-between rounded-sm'>
            <div>
                <h1 className='font-bold text-3xl'>English Tutors</h1>
                <p className='text-gray-600 text-lg'>2004 Teachers</p>
            </div>
            <div>
            <IoIosArrowDropright  className='text-xl'/>
            </div>
        </div>
        
        </div>
    );
};

export default SingleCategoryCard;