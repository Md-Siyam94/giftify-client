import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const MainLayout = () => {
    return (
        <div>
            <header className='sticky top-0 z-10'>
                <Navbar />
            </header>
            <main>
                <Outlet />
            </main>
        {/* Footer */}
            <footer>
          <Footer></Footer>
            </footer>
        </div>
    );
};

export default MainLayout;