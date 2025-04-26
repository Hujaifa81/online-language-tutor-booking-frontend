import React from 'react';
import Slider from '../components/slider/Slider';
import Stats from '../components/Stats';
import Categories from '../components/Categories';
import Testimonials from '../components/testimonials/Testimonials';
import BecomeTutor from '../components/BecomeTutor';
import Footer from '../components/Footer';

const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <div className='mt-5'>
            <Stats></Stats>
            </div>
            <div>
                <Categories></Categories>
            </div>
            <div>
                <Testimonials></Testimonials>
            </div>
            <div>
                <BecomeTutor></BecomeTutor>
            </div>
            
            
        </div>
    );
};

export default Home;