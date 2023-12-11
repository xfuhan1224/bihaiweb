import React from 'react';
import './NavBar.css';
import { Link } from 'react-router-dom';

const NavBar: React.FC = () => {
    return (
        <nav>
            <ul>
                <li className="home-item"><Link to="/">Home</Link></li>
                <div className="right-items">
                    <li><Link to="/about">About Me</Link></li>
                    <li><a href="/works">Works</a></li>
                    <li><Link to="/ability">Ability</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </div>
            </ul>
        </nav>
    );
};

export default NavBar;
