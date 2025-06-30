import React from 'react';
import Navbar from '../Component/NavBar/Navbar';
import { Outlet } from 'react-router';
const MainLayout = () => {
    return (
        <>
        <div className="sticky top-0 mt-2 z-50">
<Navbar></Navbar>
        </div>
            
            <div className="overflow-hidden">
                <Outlet></Outlet>
            </div>
        
        </>
    );
};

export default MainLayout;