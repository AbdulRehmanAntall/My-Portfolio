import React, { useState } from 'react';
import './Navbar.css';

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav id="" className="navbar">
            <div className="nav-container">
                <h2 className="logo">Abdul Rehman Antall</h2>

                <ul className="navlinks">
                    <li><a href="#">Home</a></li>


                </ul>


            </div>
        </nav>
    );
}

export default Navbar;
