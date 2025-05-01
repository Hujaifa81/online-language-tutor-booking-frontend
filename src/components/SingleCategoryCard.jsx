import React from 'react';
import { IoIosArrowDropright } from 'react-icons/io';
import { Link } from 'react-router-dom';

const SingleCategoryCard = ({category,count}) => {
    return (
        <div className=''>
            <Link to={`/find-tutors/${category}`}><div  className='cursor-pointer flex items-center border border-gray-300 w-full  px-4 py-4 justify-between rounded-sm'>
            <div>
                <h1 className='font-bold text-3xl'>{category} Tutors</h1>
                <p className='text-gray-600 text-lg'>{count} Teachers</p>
            </div>
            <div>
            <IoIosArrowDropright  className='text-xl'/>
            </div>
        </div>
        </Link>
        
        </div>
    );
};

export default SingleCategoryCard;