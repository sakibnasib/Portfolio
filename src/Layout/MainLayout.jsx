import React from 'react';
import Navbar from '../Component/NavBar/Navbar';
import { Outlet } from 'react-router';
import Footer from '../Component/Fotter/Fotter';
import BlackDotBackground from '../Component/BackgroundMeteors/BackgroundMeteors';
const MainLayout = () => {
    return (
        <>
        <BlackDotBackground>
        <div className="sticky top-0  z-50">
<Navbar></Navbar>
        </div>
            
            <div className="overflow-hidden">
                <Outlet></Outlet>
            </div>
        <Footer/>
        </BlackDotBackground>
        </>
    );
};

export default MainLayout;