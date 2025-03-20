import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../../components/Navbar';

const MainLayout = () => {
    return (
        <div>
            <header className='max-w-screen-2xl '>
                <Navbar/>
            </header>
            <main>
                <Outlet/>
            </main>
            <footer>
                {/* Todo: footer */}
            </footer>
        </div>
    );
};

export default MainLayout;