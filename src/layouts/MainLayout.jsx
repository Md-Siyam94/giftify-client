import React from 'react';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
    return (
        <div>
            <header>
                {/* Todo: navbar */}
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