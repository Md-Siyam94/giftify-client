import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const MainLayout = () => {
    return (
        <div>
            <header className='sticky top-0 z-10'>
                <div className="bg-base-100 shadow-sm">
                    <div className="max-w-screen-xl mx-auto">
                        <Navbar />
                    </div>
                </div>
            </header>
            <main className='min-h-screen'>
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