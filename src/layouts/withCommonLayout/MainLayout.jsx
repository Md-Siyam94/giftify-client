import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../../components/Navbar';

const MainLayout = () => {
    return (
        <div>
            <header className='sticky top-0 z-10'>
                <Navbar />
            </header>
            <main>
                <Outlet />
            </main>
            <footer>
                {/* Todo: footer */}
            </footer>
        </div>
    );
};

export default MainLayout;