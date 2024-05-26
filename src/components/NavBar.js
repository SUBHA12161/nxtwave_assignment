import React from 'react';
import '../css/Navbar.css';

const Navbar = ({ onAddItemClick }) => {
    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <img src="/logo.png" alt="Logo" className="logo-img" />
            </div>
            <div className="navbar-buttons d-flex align-items-center">
                <button
                    className="btn btn-success d-flex align-items-center justify-content-center"
                    onClick={onAddItemClick}
                >
                    &nbsp;<span>ADD ITEM</span>
                </button>
                <div className="navbar-profile-icon ms-3">
                    <img src="/S.png" alt="user" className="profile-img" />
                </div>
            </div>
        </nav>
    );
};

export default Navbar;