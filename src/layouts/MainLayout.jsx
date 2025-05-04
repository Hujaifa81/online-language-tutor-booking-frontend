import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';
import Nav from '../components/Nav';
import useTitle from '../hooks/useTitle';

const MainLayout = () => {
    
    return (
        <div className='font-raleway bg-white dark:black'>
            {
                useTitle()
            }
            <Nav></Nav>
            <Outlet></Outlet>
           
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;