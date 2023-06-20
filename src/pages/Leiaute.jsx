import React, { useState } from 'react';
import SideBar from '../components/Sidebar';
import { Outlet } from 'react-router-dom';

const Layout = () => {
    const [isOpen, setIsOpen] = useState(true);

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <div className='d-flex'>
                <SideBar isOpen={isOpen} handleToggle={handleToggle} />
                <div
                    className={`flex-1 w-100 content `}
                    style={{
                        transition: 'margin-left 0.3s ease-in-out',
                        position: 'relative', 
                        zIndex: '1', 
                    }}
                >
                    <nav className="navbar bg-body-tertiary">
                        <div className="container-fluid">
                            <button className="toggle-button" onClick={handleToggle}>
                                Toggle Sidebar
                            </button>
                        </div>
                    </nav>
                    <div className='container mt-3'>
                        <Outlet />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Layout;
